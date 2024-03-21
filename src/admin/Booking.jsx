import React, { useEffect, useState } from 'react'

import { AppBar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'

import axios from 'axios'
import { Link } from 'react-router-dom';

const Booking = () => {
    var [books, setBooks] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3005/booking")
        .then(response => {
          setBooks(response.data)
        })
        .catch(err => console.log(err))
    }, [])
 
return (
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
    </Button>
    </div>
</Toolbar>
</AppBar>
<br/>

    </div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>work id</TableCell>
            <TableCell>worker name</TableCell>
          
            <TableCell>age</TableCell>
            <TableCell>phone</TableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row,pos) => (
            <TableRow
              key={pos}
              
            >
              
              
              <TableCell>{row.did}</TableCell>
              <TableCell>{row.name}</TableCell>
             
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.phone}</TableCell>
             
             
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
    
)
  
};
export default Booking