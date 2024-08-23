import React from 'react'
import { AppBar, Typography ,Toolbar ,Button } from '@mui/material';
import {Link} from 'react-router-dom'
import { Logout } from './Logout';
const button={marginRight:'20px',fontSize:'1.2rem'}
export const Navbar = () => {
  return (
    <AppBar sx={{bgcolor: '#333'}}>
      <Toolbar>
        <Typography variant = "h4"sx={{flexGrow:1 }}> Notewins </Typography>
        <Button style={button}color="warning" variant = "contained" to = "/login" component ={Link}>Login</Button>

        <Button style={button}color="success" variant = "contained" to = "/signup" component ={Link}>Signup</Button>
        {/* <Button variant = "contained">Logout</Button> */}
        <Logout/>
      </Toolbar> 
    </AppBar>
  )
}
