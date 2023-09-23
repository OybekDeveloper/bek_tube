import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {Main, Navbar, Search, VideoDetail} from "../";
import {Channel} from "../";
import {colors} from "../../constats/colors";

const App = () => {

  return (
      <Box sx={{backgroundColor:colors.background}}>
          <Navbar/>
        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/channel/:id'} element={<Channel/>}/>
          <Route path={'/search/:id'} element={<Search/>}/>
          <Route path={'/video/:id'} element={<VideoDetail/>}/>
        </Routes>
      </Box>
  )
};

export default App;
