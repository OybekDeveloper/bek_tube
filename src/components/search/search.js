import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../../service/api.service";
import {Box, Container, Typography} from "@mui/material";
import {Videos} from "../index";
import {colors} from "../../constats/colors";

const Search = () => {
    const [videos, setVideos]=useState([]);
    const {id}=useParams();
    useEffect(() => {
        const getData=async()=>{
            try{
                const data=await ApiService.fetching(`search?part=snippet&q=${id}`);
                setVideos(data.items)
            }catch(error){
                console.log(error)
            }
        }

        getData();
    }, [id, videos]);
    return (
       <Box>
           <Container maxWidth={'90%'}>
               <Typography variant={'h4'} fonstWeight={'bold'} mb={2}>
                    Search result for <span style={{color:colors.icon}}>{id}</span> videos
               </Typography>
               <Videos videos={videos}/>
           </Container>
       </Box>
    );
};

export default Search;