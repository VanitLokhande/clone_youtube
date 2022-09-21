import React from 'react'
import { useState , useEffect } from 'react';
import {Box,Typography} from '@mui/material';
import { borderRight } from '@mui/system';
import {Videos} from './';
import { useParams } from 'react-router-dom';


import { fetchFromapi } from '../utils/fetchFromapi';

const SearchFeed = () => {
  
  const [videos , setvideos] = useState([]);
  const {searchTerm} = useParams();


  useEffect(() => {
    fetchFromapi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideos(data.items))
  },[searchTerm]);



  return (
    <Box p={2} sx={{ overflow: 'auto', height:'90vh'}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>search result for: <span style={{ color : '#F31503'}}>{searchTerm}</span> videos
          </Typography>



    <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed;

