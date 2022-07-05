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
  BottomNavigation
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const Footer: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor:"common.black", py:8 }}>
      
        <Toolbar>
          <Typography color="common.white" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontStyle:  'Roboto',}}>
            Yuki's Portfolio 
          </Typography>

        
        </Toolbar>
      
    </Box>
  );
};

export default Footer;
