import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader=()=> {
    return (
        <Box sx={{ display: 'flex' , alignItems:'center',justifyContent:'center', marginTop:'30px'}}>
            <CircularProgress />
        </Box>
    );
}

export default Loader;