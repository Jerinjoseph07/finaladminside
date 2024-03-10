import { AppBar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Buffer } from 'buffer'


const Clientdetails = () => {
  
 
    var[Client,setClient]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/cview")
        .then(response=>{
            setClient(response.data)
            console.log(response.data)
    })
    .catch(err=>console.log(err))
    })
   

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
            <TableCell>name</TableCell>
            <TableCell>phone number</TableCell>
          
            <TableCell>location</TableCell>
            <TableCell>photo</TableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Client.map((row,pos) => (
            <TableRow
              key={pos}
              
            >
              
              
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
             
              <TableCell>{row.location}</TableCell>
              <TableCell>
              <img src={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`} width="50" height="50" alt="Error" />
              </TableCell>
             
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
    
)
  
};
export default Clientdetails