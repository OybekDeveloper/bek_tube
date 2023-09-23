import React, {useEffect, useState} from "react";
import {Box, Button, Container} from "@mui/material";
import {Link, useParams} from 'react-router-dom'
import {ApiService} from "../../service/api.service";
import {ChannelCard, Videos} from "../index";


const Channel = () => {
    const {id}=useParams();
    const [channelDetail,setChannelDetail]=useState();
    const [dataVideos, setDataVideos]=useState([]);


    useEffect(() => {
        const getData=async ()=>{
            try{
                const dataChannelDetail= await ApiService.fetching(`channels?part=snippet&id=${id}`);
                setChannelDetail(dataChannelDetail.items[0]);
                const dataVideo= await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`);
                setDataVideos(dataVideo.items);
            }catch (error){
                console.log(error);
            }

        }
        getData();
    }, [id]);
    console.log(channelDetail)
  return (
      <Box minHeight={'95vh'} mt={'1vh'}>
          <Box>
              <Box
                  width={'100%'}
                  height={'200px'}
                  zIndex={10}
                  sx={{
                      backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      objectFit: 'cover',
                      backgroundRepeat: 'no-repeat',
                  }}
              />
              <ChannelCard video={channelDetail} marginTop={'-100px'} />
          </Box>
          <Container maxWidth={'90%'}>
              <Videos videos={dataVideos} />
          </Container>
      </Box>
  );
};

export default Channel;
