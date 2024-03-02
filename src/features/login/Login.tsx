import React , {useState} from 'react';

import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import { Navigate, useNavigate } from 'react-router';
import axiosInstance from "../../axios/AxiosInstance";
const Login = () => {
    const getToken = async () => {
        const data = new URLSearchParams();
        data.append('client_id', 'React');
        data.append('grant_type', 'password');
        data.append('username', 'admin');
        data.append('password', '1q2w3E*');
        data.append('client_secret', '1q2w3e*');
        data.append('scope', 'GraduatingProject refresh_token offline_access profile phone email');
        data.append('redirect_uri', 'https://admin.hamzaal.com');

        try {
            const response = await axiosInstance({
                method: 'post',
                url: 'https://admin.hamzaal.com/connect/token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            });

            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching the token:', error);
        }
    };
    function loginFunction(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        getToken()
    }
    const [cred, setCred] =useState({email:"", password: ""});
    const navigate=useNavigate();
  return (
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
            Login
          </Typography>
        <form style={{ width: '100%', marginTop: 16 }} method="POST" onSubmit={loginFunction}>
          <TextField
            value={cred.email}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Username"
            name="Username"
            autoComplete="username"
            autoFocus
            onChange={event => setCred({email: event.target.value, password: cred.password})}
           
          />
          <TextField
            value={cred.password}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={event => setCred({email: cred.email, password: event.target.value})}
          />

         


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            style={{ marginTop: 24 }}
          >
            Login
          </Button>
          
          
           <Button 
          variant="text" 
          color='success'
          onClick={()=> navigate("/security/register")}
          >
            Register
          </Button>


          
        </form>
      </Paper>
    </Container>
  );
};

export default Login;






// export default function Login(){
//     return(
//         <div>
//         <input margin="normal" id="outlined-basic" label="Outlined" variant="outlined" />
//         <input margin="normal" id="outlined-basic" label="Outlined" variant="outlined" type="password" />
//         <Button variant="contained">Contained</Button>
//         </div>
//     )
// }