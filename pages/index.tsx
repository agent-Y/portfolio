import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { NextPage } from "next";
import TextField from "@mui/material/TextField";
import { height } from "@mui/system";
import Navigation from "../components/layouts/navigation/navigation";
import Works from "../components/main/works";
import ContactForm from "../components/layouts/contact_form"
import Footer from "../components/layouts/footer"


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Container>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ py: 6, maxWidth: "2xl", mx: "auto", minHeight: "100vh" }}>
            <Typography align="center">{children}</Typography>
          </Box>
        )}
      </div>
    </Container>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const Home: NextPage = () => {
  {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <>
        <Box
          sx={{
            minHeight: "100vh",
            width: "100%",
            bgcolor: "primary.dark",
            fontFamily: "primary.Helvetica Neue",
          }}
        >
          <Navigation />
          <Box sx={{ borderBottom: 1 }}>
            <Tabs
              textColor="primary"
              indicatorColor="primary"
              centered={true}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="works" {...a11yProps(0)} />
              <Tab label="profile" {...a11yProps(1)} />
              <Tab label="contact" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Works />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <ContactForm/>
          <Footer />
        </Box>
      </>
    );
  }
};

export default Home;
