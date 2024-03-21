
import React, { useEffect, useState } from 'react';
import { CardHeader, CardContent, Typography, Card, AppBar, Toolbar, Button, TextField } from '@mui/material';
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';

const Home= () => {

  return (
    <>
      <div style={{ backgroundColor: '#c7ddcc', height: 'auto'  }}>
        <div align="center">
        <AppBar position="static" style={{ height: '80px', backgroundColor: '#abd699' }}>
    <Toolbar>
      <Typography variant="h6">
      Worker Connect
      </Typography>




      <div style={{ marginLeft: 'auto' }}>
         
          <Button component={Link} to="/cdetails" color="inherit">
            All Client
          </Button>
          <Button component={Link} to="/w" color="inherit">
            All worker
          </Button><Button component={Link} to="/workview" color="inherit">
            all works
          </Button>
          <Button component={Link} to="/booking" color="inherit">
            booking
          </Button>
          </div>
    </Toolbar>
  </AppBar>
  <br/>
  
          </div>
        </div>
      
    </>
  );
};

export default Home;
