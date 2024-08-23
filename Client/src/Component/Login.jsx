import React from 'react'
import { Grid,  Button, Paper, TextField, Typography } from "@mui/material";
export const Login = () => {
  const heading={fontSize:"2.5rem",fontWeight:600}
  const paperStyle={padding:"2rem" ,margin:"100px auto",borderRadius:"1rem",boxShadow:"10px 10px 10px"}
  const row={display:"flex",marginTop:"2rem"}
  const btnStyle={marginTop:"2rem",fontSize:"1.2rem",fontWeight:"700",backgroundColor:"green",borderRadius:"0.5rem"}
  return (
    <>
    <Grid align="center">
       <Paper style={paperStyle}sx={{width:{ 
        xs:'80vw',   // 0
        sm: '50vw',     // 600
        md: '40vw',     // 900
        lg: '30vw',     // 1200
        xl: '20vw',     // 1536 
       },
       height:'45vh'}}>
         <Typography style={heading}>Login</Typography>
       <form >
         
         <TextField sx={{label:{fontWeight:'700',fontSize:"1.3rem"}}} style ={row} label="Enter Email" type="email"></TextField>
         <TextField sx={{label:{fontWeight:'700',fontSize:"1.3rem"}}} style ={row} label="Enter Password" type="password"></TextField>
         <Button type='submit' variant='contained' style={btnStyle}>Login</Button>
       </form> 
       </Paper>
    </Grid>
 </>
  )
}
