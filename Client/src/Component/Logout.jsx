import {Button} from '@mui/material'
import React from 'react'
const button={marginRight:'20px',fontSize:'1.2rem'}
export const Logout = () => {
  return (
    <Button color="warning" style={button} variant="contained">Logout</Button>
  )
}
