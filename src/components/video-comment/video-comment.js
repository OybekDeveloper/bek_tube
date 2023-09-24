import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedIcon from "@mui/icons-material/Feed";

const VideoComment = ({ video, display }) => {
  const {
    snippet: { topLevelComment },
  } = video;
  return (
    <Stack
      m={2}
      display={display}
      sx={{ transition: "all .3s ease-in-out" }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Avatar src={topLevelComment?.snippet?.authorProfileImageUrl} />
        <Typography
          variant={"subtitle2"}
          color={"grey"}
          ml={"5px"}
          display={"flex"}
          sx={{ flexDirection: "column" }}
        >
          <Typography>
            {" "}
            @{topLevelComment?.snippet?.authorDisplayName}
          </Typography>
          <Typography variant={"subtitle2"}>
            {topLevelComment?.snippet?.textOriginal}
          </Typography>
        </Typography>
      </Stack>
      <Typography alignItems={"center"} m={2}>
        <Box alignItems={"center"} flexDirection={"row"} display={"flex"}>
          <FavoriteIcon
            sx={{ color: "red", width: "20px", cursor: "pointer" }}
          />
          like {topLevelComment?.snippet?.likeCount}
        </Box>
        <Box alignItems={"center"} flexDirection={"row"} display={"flex"}>
          <FeedIcon sx={{ width: "20px", color: "grey", cursor: "pointer" }} />
          data: {topLevelComment?.snippet?.publishedAt}
        </Box>
      </Typography>
      <hr />
    </Stack>
  );
};

export default VideoComment;
