import React from 'react'
import { useState , useEffect } from 'react';
import {Box,Stack,Typography} from '@mui/material';
import { borderRight } from '@mui/system';
import {Sidebar ,Videos} from './';

import { fetchFromapi } from '../utils/fetchFromapi';

const Feed = () => {
  const [selectedCategory , setSelectedCaterory] = useState('New');
  const [videos , setvideos] = useState(null);


  useEffect(() => {
    setvideos(null);
    fetchFromapi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setvideos(data.items))
  },[selectedCategory]);



  return (
    <Stack sx={{ flexDirection: { sx: "column", md:"row"}}}>
      <Box sx={{ height: {sx: 'auto' , md: '92vh'}, borderRight: '1px solid #3d3d3d' , px: {sx : 0 , md:2}}}>

        <Sidebar selectedCategory={selectedCategory} setSelectedCaterory={setSelectedCaterory}/>
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
           
        </Typography>

        </Box>

        <Box p={2} sx={{ overflow: 'auto', height:'90vh'}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>{selectedCategory} <span style={{ color : '#F31503'}}>Videos</span>
          </Typography>



          <Videos videos={videos} />
        </Box>

    </Stack>
  )
}

export default Feed;
