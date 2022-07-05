import * as React from "react";
import type { NextPage } from "next";
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from './drawer'

const Navigation: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar elevation={0} position="static" sx={{bgcolor:'primary.dark'}} >
        <Toolbar>
        <Drawer />
          <Typography variant="h6" color="primary.dark" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontStyle:  'Roboto',}}>
            Yuki's Portfolio 
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
