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

export default function SignUp() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    const[students,setStudents]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const student={username,email,password}
    console.log(student)
    fetch("http://localhost:8090/api/auth",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(async response=>{
    const isJson = response.headers.get('content-type')?.includes('application-json');
    const data = isJson && await response.json();

    // check for error response
        if (!response.ok){
            // get error message from body or default to response status
            const  error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        setMessage(data.message)
        window.alert(message);
  })
}

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Registration</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>

    </Container>
  );
}
