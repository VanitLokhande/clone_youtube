import React, { useState } from 'react'
import { Stack } from '@mui/system';
import {Link} from 'react-router-dom';
import {logo} from '../utils/constance'
import Searchbar from './Searchbar';

const Navbar = () => {
 
  return (
    <Stack direction="row"
    alignItems="center"
    p={2}
    sx={{ position:'sticky', background: '#000', top:0, justifyContent: 'space-between'}}>

      <Link to="/"  style={{ display : 'flex', alignItems:'center'}}>
        <img src= {logo} alt="Logo" height={50}/>
      </Link>
      <Searchbar/>
    </Stack>
  )
}

export default Navbar
