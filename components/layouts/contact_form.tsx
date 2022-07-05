import TextareaAutosize from '@mui/material/TextareaAutosize';
import {NextPage} from 'next'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";



const ContactForm: NextPage = () => {


  return (
    <Box sx={{ bgcolor:'primary.light', width:'100%',  mx:"auto" }}  >
            <Box
              component="form"
              sx={{
                mx: "auto",
                width: "100%",
                maxWidth:"sm",
                p:6
              }}
              noValidate
            >
              <Typography sx={{pb:4}} variant="h2" component="h2">Contact</Typography>

              <TextField
                required
                id="title"
                label="title"
                variant="filled"
                sx={{width:"100%",bgcolor:"primary.light", mb:2}}
              />
              <TextField
                required
                id="name"
                label="name"
                variant="filled"
                sx={{width:"100%",bgcolor:"primary.light", mb:2}}
              />
            </Box>
          </Box>

  )
}

export default ContactForm