import React ,{useState} from 'react';
import { Grid,  Button, Paper, TextField, Typography } from "@mui/material";
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export const Signup = () => {
  const heading={fontSize:"2.5rem",fontWeight:600}
  const paperStyle={padding:"2rem" ,margin:"100px auto",borderRadius:"1rem",boxShadow:"10px 10px 10px"}
  const row={display:"flex",marginTop:"2rem"}
  const btnStyle={marginTop:"2rem",fontSize:"1.2rem",fontWeight:"700",backgroundColor:"green",borderRadius:"0.5rem"}
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword ] = useState("");
  const navigate = useNavigate();
  const handleSignup=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/signup",{name,email,username,password})
    .then(result=>{
         if(result.status==201){
            console.log("User created successfully");
            navigate("/login");
         }
    })
    .catch(err=>{
        if(err.response && err.response.status===400){
          window.alert("Email already exists.Please use a different Email");
        }
        else{
          console.log(err);
        }
    })
  }
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
          height:'70vh'}}>
            <Typography style={heading}>Signup</Typography>
          <form onSubmit={handleSignup} >
            <TextField onChange={(e)=>setName(e.target.value)} name="name" required sx={{label:{fontWeight:'700',fontSize:"1.3rem"}}} style ={row}  label="Enter Name" type="text"></TextField>
            <TextField onChange={(e)=>setEmail(e.target.value)} name="email" required sx={{label:{fontWeight:'700',fontSize:"1.3rem"}}} style ={row} label="Enter Email" type="email"></TextField>
            <TextField onChange={(e)=>setUsername(e.target.value)} name= "username"required sx={{label:{fontWeight:'700',fontSize:"1.3rem"}}} style ={row} label="Enter Username" type="text"></TextField>
            <TextField onChange={(e)=>setPassword(e.target.value)} name="password" required sx={{label:{fontWeight:'700',fontSize:"1.3rem"}}} style ={row} label="Enter Password" type="password"></TextField>
            <Button type='submit' variant='contained' style={btnStyle}>SIGNUP</Button>
          </form> 
          </Paper>
       </Grid>
    </>
  )
}
