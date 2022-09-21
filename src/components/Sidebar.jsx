import { Category } from '@mui/icons-material';
import { Stack } from '@mui/system';
import React from 'react'
import { categories } from '../utils/constance';




const Sidebar = ({selectecdCategory,setSelectedCaterory}) => (
   <Stack direction="row"  sx={{  overflow:"auto", height:{sx:'auto' , md: '95%'} , flexDirection:{md : 'column'},}}>
    {categories.map((category) =>(
        <button onClick={() => setSelectedCaterory(category.name)} className='category-btn' style={{ background: category.name === selectecdCategory && '#FC1503', color:'white'}} 
         key={category.name}>
            <span style={{ color: category.name === selectecdCategory ? 'white' : 'red', marginRight:'10px'}}>{category.icon}</span>
            <span style={{ opacity: category.name === selectecdCategory ? '1' : '0.8' }}>{category.name}</span>
        </button>
    ))}

   </Stack>
  )


export default Sidebar;
