import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logos/DON LISANDRO.png";
import { Button } from "@material-ui/core";
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.NavbarButtonsContainer}>
          <Typography
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Image src={logo} width={169} height={100}></Image>
          </Typography>

          <Button>
            <Link href="/inicio">inicio</Link>
          </Button>
          <Button>
            <Link href="/hostal">hostal</Link>
          </Button>
          <Button>
            <Link href="/windcar">windcar</Link>
          </Button>
          <Button>
            <Link href="/beerpoint">beerpoint</Link>
          </Button>
          <Button>
            <Link href="/mapas">Donde estamos</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
