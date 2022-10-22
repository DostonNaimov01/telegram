import React, { Component } from "react";
import {
  Box,
  Card,
  Avatar,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default class Messages extends Component {
  state = {
    your_id: 1,
  };
  render() {
    const { messages } = this.props;
    return (
      <Box width={"40%"} height="100%" sx={{ backgroundColor: "gray" }}>
        <Card sx={{ width: "90%", mt: 3, ml: "5%" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"></Avatar>
            }
            action={
              <Box display={"flex"} gap="20px">
                <IconButton aria-label="settings">
                  <LocalPhoneIcon />
                </IconButton>
                <IconButton aria-label="settings">
                  <SearchIcon />
                </IconButton>
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              </Box>
            }
            title="Dilshod Murtazoyev"
            subheader="Last seen 16:30"
          />
        </Card>
        <Box
          ml={"5%"}
          width={"90%"}
          mt={3}
          height="75%"
          // sx={{ overflowY: "scroll" }}
        >
          {messages
            .filter((prev) => prev.user_id === this.state.your_id)
            .map((item, index) => (
              <>
                <Box
                  display={"flex"}
                  my={2}
                  justifyContent={
                    item.user_id === this.state.your_id ? "end" : "start"
                  }
                >
                  <Typography
                    // className="Your Message"
                    sx={{ maxWidth: "50%", borderRadius: "20px 20px 0 20px" }}
                    variant="p"
                    color={"black"}
                    bgcolor={
                      item.user_id === this.state.your_id ? "#fff" : "#CFFFCB"
                    }
                    padding={"10px 20px"}
                  >
                    {item.title}
                  </Typography>
                </Box>
                {item.send_who_titles.length !== 0 ? 
                  <Box display={"flex"} justifyContent="start">
                    <Typography
                      // className="Your Message"
                      sx={{ maxWidth: "50%", borderRadius: "0 20px 20px 20px" }}
                      variant="p"
                      color={"black"}
                      bgcolor="#CFFFCB"
                      padding={"10px 20px"}
                    >
                      {
                        item.send_who_titles[0].title
                      }
                    </Typography>
                  </Box>
                 : 
                  ""
                }
              </>
            ))}
          {/* <Box display={'flex'} justifyContent='end'>
            <Typography
              // className="Your Message"
              sx={{ maxWidth: "50%", borderRadius: "20px 20px 0 20px" }}
              variant="p"
              color={"black"}
              bgcolor="#fff"
              padding={"10px 20px"}
            >
              Hello world
            </Typography>
          </Box>

          <Box display={'flex'} justifyContent='start'>
            <Typography
              // className="Your Message"
              sx={{ maxWidth: "50%", borderRadius: "0 20px 20px 20px" }}
              variant="p"
              color={"black"}
              bgcolor="#CFFFCB"
              padding={"10px 20px"}
            >
              Hello world
            </Typography>
          </Box> */}
        </Box>
      </Box>
    );
  }
}
