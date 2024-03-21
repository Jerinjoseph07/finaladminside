import React, { useState } from "react";

import { useNavigate,} from "react-router-dom";
import { AppBar, Button, Container, Paper, TextField, Toolbar, Typography } from "@mui/material";
import axios from "axios";

function Adminlog() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    // Validate email format and password length
    if (!isValidEmail(email) || password.length < 8) {
      alert("Invalid email or password (password must be at least 8 characters long)");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3005/adminlog", {
        email,
        password,
      });

      if (response.data.success) {
        alert(response.data.message);
        // Redirect to desired page after successful login
        navigate("/home");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while logging in");
    }
  }

  // Function to validate email format
  const isValidEmail = (email) => {
    // Email regex pattern for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    
    <div style={{ backgroundColor: '#c7ddcc', height: '100vh' }}>
    <AppBar position="static" style={{ height: '80px', backgroundColor: '#abd699' }}>
      <Toolbar>
        <Typography variant="h5">
          Worker Connect
        </Typography>
      </Toolbar>
    </AppBar>  
    <br/>
    <Container component="main" maxWidth="xs">
      
    
  
    <Paper elevation={6} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0', width: '330px', height: '320px' }}>
        <Typography variant="h5">Welcome Admin</Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          // value={username}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          // value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
        <br/>
        <Button
             variant="contained"
             fullWidth
            onClick={submit}
            style={{ marginTop: 16, backgroundColor: '#008000' }}
        >
          Login
        </Button>
        <br/>
        
      </Paper>
    </Container>
     
    </div>
    
  );
}

export default Adminlog;
