import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import SignUp from "./SignUp";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Login() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    const[status,setStatus]=useState('')
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const user={username,password}
        console.log(user)
        fetch("http://localhost:8090/api/auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)

        }).then(async response=>{
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok){
                // get error message from body or default to response status
                const  error = (data && data.message);
                return Promise.reject(error);
            }

            setMessage(data.message);
            setStatus(data.status);
            console.log(status,message)
            if (status){
                window.open("/productList")
            }else {
                window.alert(message)
            }
        })
    }

    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}><u>Sign In</u></h1>

                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth
                               value={username}
                               onChange={(e)=>setUsername(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
                               value={password}
                               onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button><br/>
                    <a href="/signUp" onClick={SignUp}>SignUp</a>
                </form>

            </Paper>

        </Container>
    );
}