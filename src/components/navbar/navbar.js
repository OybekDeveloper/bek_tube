import { Box, Stack } from "@mui/material";
import logo from "../../constats/logo3.jpg";
import { colors } from "../../constats/colors";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.navbarC,
      }}
    >
      <Link to={"/"}>
        <img
          src={logo}
          alt={"logo"}
          height={40}
          style={{ borderRadius: "4px" }}
        />
      </Link>
      <SearchBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .3s ease-in-out",
        }}
      >

      </Box>
    </Stack>
  );
};

export default Navbar;
