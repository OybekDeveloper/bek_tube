import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Loader, Videos } from "../index";
import renderHTML from 'react-render-html';

import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [relatedVideo, setRelatedVideo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet, statistics&id=${id}`,
        );
        const related = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`,
        );
        setRelatedVideo(related.items);
        setVideoDetails(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  if (!videoDetails?.snippet) return <Loader />;

  const {
    snippet: { title, channelTitle, description, tags, thumbnails },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetails;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: { xs: "center", md: "start" },
          alignItems: { xs: "center", md: "start" },
        }}
        display={"flex"}
        alignItems={"center"}
      >
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            className={"react-player"}
          />
          {videoDetails?.snippet.tags.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
          <Typography variant={"h5"} fontWeight={"bold"} p={2}>
            {title}
          </Typography>
          <Typography variant={"subtitle2"} p={2} sx={{ opacity: "0.7" ,width:'90%'}} >
            {description}
          </Typography>
          <Stack
            direction={{xs:'column',md:'row'}}
            gap={"20px"}
            alignItems={"center"}
            py={1}
            px={2}
          >
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Visibility />
              {parseInt(viewCount).toLocaleString()} views
            </Stack>
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              py={1}
              px={2}
            >
              <FavoriteOutlined />
              {parseInt(likeCount).toLocaleString()} likes
            </Stack>
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              py={1}
              px={2}
            >
              <MarkChatRead />
              {parseInt(commentCount).toLocaleString()} comments
            </Stack>
          </Stack>
          <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
            <Stack direction={"row"} py={1} px={2}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"5px"}
                marginTop={"5px"}
              >
                <Avatar alt={channelTitle} src={thumbnails.default.url} />
                <Typography variant={"subtitle2"} color={"gray"}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Stack>
          </Link>
        </Box>
        <Box
          width={{ xs: "90%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
