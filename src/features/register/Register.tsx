// import {Typography} from "@mui/material";

// export default function Register(){
//     return(
//         <Typography>asdasd{"REGISTER PAGE"}</Typography>
//     )
// }
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router';

const theme = createTheme();

const Register = () => {
  const [reg , setReg]=useState ({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });
  const handlerFirstNameInputChange = (event: { target: { value: any; }; })=> {
    setReg({...reg, firstName: event.target.value})
  }
  const handlerLastNameInputChange = (event: { target: { value: any; }; })=> {
    setReg({...reg, lastName: event.target.value})
  }
  const handlerEmailInputChange = (event: { target: { value: any; }; })=> {
    setReg({...reg, email: event.target.value})
  }
  const handlerPasswordInputChange = (event: { target: { value: any; }; })=> {
    setReg({...reg, password: event.target.value})
  }

  const navigate=useNavigate();
  return (
    // <ThemeProvider theme={theme}>
     

      <Container
      component="main"
      maxWidth="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh',
      }}
    >

       

        <Paper
        elevation={3}
        style={{
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
          <Typography variant="h4" style={{ marginBottom: 16 }}>
            Register
          </Typography>
          <form method = "POST" style={{ width: '100%', marginTop:16 }}>
            <TextField
            onChange={handlerFirstNameInputChange}
            value={reg.firstName}
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
            />
            <TextField
              onChange={handlerLastNameInputChange}
              value={reg.lastName}
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
            <TextField
              onChange={handlerEmailInputChange}
              value={reg.email}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              onChange={handlerPasswordInputChange}
              value={reg.password}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              style={{ marginTop: theme.spacing(3) }}
              disabled={ !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(reg.email)) }
            >
              Register
            </Button>
            <Button 
          variant="text" 
          color='success'
          onClick={()=> navigate("/security/login")}
          >
            Login
          </Button>
          </form>
        </Paper>
      </Container>
    // </ThemeProvider>
  );
};

export default Register;

