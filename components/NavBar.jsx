import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logos/DON LISANDRO.png"
const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
            <Typography 
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: "none", md: "flex"}}} 
            >
                <Image src={logo} width={169} height={100} ></Image>
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
