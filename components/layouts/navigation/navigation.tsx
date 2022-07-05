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
      <AppBar position="static" sx={{bgcolor:'white'}} >
        <Toolbar>
        <Drawer />
          <Typography variant="h6" color="common.black" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
