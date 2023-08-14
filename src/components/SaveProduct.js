import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function SaveProduct() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState('')
    const[categoryId,setCategoryId]=useState('')
    const[message,setMessage]=useState('')
    const[status,setStatus]=useState('')
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const product={name,description,price,categoryId}
        console.log(product)
        fetch("http://localhost:8090/api/product",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)

        }).then(async response=>{
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok){
                const  error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setMessage(data.message)
            setStatus(data.status)
            console.log(message,status)

        })
    }

    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}><u>Add Product</u></h1>

                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
                               value={name}
                               onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth
                               value={description}
                               onChange={(e)=>setDescription(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Price" variant="outlined" fullWidth
                               value={price}
                               onChange={(e)=>setPrice(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="CategoryId" variant="outlined" fullWidth
                    value={categoryId}
                    onChange={(e)=>setCategoryId(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button>
                </form>

            </Paper>

        </Container>
    );
}