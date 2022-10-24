import React, { Component } from "react";
import {
  Box,
  Card,
  Avatar,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default class Messages extends Component {
  state = {
    your_id: 1,
    title: "",
    valText: "",
  };
  sendtitle = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  };
  sendInfo = () => {
    let sendUser = {
      title: this.state.title,
      createdDate: "16:30",
      user_id: this.props.activeUserId,
      send_who_titles: [],
    };
    this.props.sendBtn(sendUser);
  };

  render() {
    const { messages, usersData, activeUserId } = this.props;
    // console.log(this.state.title);
    return (
      <Box width={"40%"} height="100%" sx={{ backgroundColor: "gray" }}>
        {activeUserId === "" ? (
          ""
        ) : (
          <Card sx={{ width: "90%", mt: 3, ml: "5%" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"></Avatar>
              }
              action={
                <Box display={"flex"} gap="20px">
                  <IconButton aria-label="settings"></IconButton>
                  <IconButton aria-label="settings"></IconButton>
                  <IconButton aria-label="settings"></IconButton>
                </Box>
              }
              title={
                usersData[activeUserId].firstName +
                " " +
                usersData[activeUserId].lastName
              }
              subheader="Last seen 16:30"
            />
          </Card>
        )}
        <Box
          ml={"5%"}
          width={"90%"}
          mt={3}
          height="75%"
          sx={{ overflowY: "scroll" }}
        >
          {activeUserId === ""
            ? ""
            : messages
                .filter((prev) => prev.user_id === activeUserId)
                .map((item, index) => (
                  <>
                    <Box
                      key={index}
                      display={"flex"}
                      my={2}
                      justifyContent={
                        item.user_id === this.state.your_id ? "end" : "start"
                      }
                    >
                      <Typography
                        // className="Your Message"
                        sx={{
                          maxWidth: "50%",
                          borderRadius: "20px 20px 0 20px",
                        }}
                        variant="p"
                        color={"black"}
                        bgcolor={
                          item.user_id === this.state.your_id
                            ? "#fff"
                            : "#CFFFCB"
                        }
                        padding={"10px 20px"}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    {item.send_who_titles.length !== 0 ? (
                      <Box display={"flex"} justifyContent="start">
                        <Typography
                          // className="Your Message"
                          sx={{
                            maxWidth: "50%",
                            borderRadius: "0 20px 20px 20px",
                          }}
                          variant="p"
                          color={"black"}
                          bgcolor="#CFFFCB"
                          padding={"10px 20px"}
                        >
                          {item.send_who_titles[0].title}
                        </Typography>
                      </Box>
                    ) : (
                      ""
                    )}
                  </>
                ))}
        </Box>
        <Box sx={{ width: "100%", display: "flex", overflow: "hidden" }}>
          <Box
            component="form"
            sx={{
              ml: "5%",
              width: "89%",
              backgroundColor: "white",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={this.sendtitle}
              autoFocus
              defaultValue={this.state.valText}
            />
          </Box>
          <Box
            sx={{
              width: "1%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={this.sendInfo}
              variant="outlined"
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                mr: "50px",
              }}
            >
              <SendIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}
