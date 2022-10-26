import React, { Component } from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import UserList from "./Components/UserList/UserList";
import Messages from "./Components/Messages/Messages";
import UserInfo from "./Components/UserInfo/UserInfo";
import logo1 from './Components/UserInfo/imgs/logo_1.jpg'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class App extends Component {
  state = {
    open: false,
    usersData: [
      {
        _id: 1,
        firstName: "Dilshod",
        lastName: "Murtazoyev",
        phone: "990145867",
        username: "@DilshodMurtazoyev",
      },
      {
        _id: 2,
        firstName: "MUhammad",
        lastName: "Qobiljonov",
        phone: "990145867",
        username: "@DilshodMurtazoyev",
      },
      {
        _id: 3,
        firstName: "Dilshod",
        lastName: "Murtazoyev",
        phone: "990145867",
        username: "@DilshodMurtazoyev",
      },
      {
        _id: 4,
        firstName: "Dilshod",
        lastName: "Murtazoyev",
        phone: "990145867",
        username: "@DilshodMurtazoyev",
      },
    ],
    messages: [
      {
        title: "Salom Yaxshimisiz",
        createdDate: "16:30",
        user_id: 2,
        send_who_titles: [
          {
            title: "Valeykum",
            createdDate: "16:31",
          },
          {
            title: "Valeykum",
            createdDate: "16:31",
          },
        ],
      },
      {
        title: "Salom Yaxshimisiz",
        createdDate: "16:30",
        user_id: 1,
        send_who_titles: [
          {
            title: "Valeykum",
            createdDate: "16:31",
          },
        ],
      },
      {
        title: "Salom Yaxshimisiz",
        createdDate: "16:30",
        user_id: 1,
        send_who_titles: [
          {
            title: "Valeykum",
            createdDate: "16:31",
          },
        ],
      },
      {
        title: "Salom Yaxshimisiz",
        createdDate: "16:30",
        user_id: 1,
        send_who_titles: [
          {
            title: "Valeykum Assalom",
            createdDate: "16:31",
          },
        ],
      },
    ],
    allMedia: [
      {
        user_id: "1",
        imgs: [
          {
            img_url: logo1,
          },
          {
            img_url: logo1,
          },
          // {
          //   img_url: "./imgs/logo_3.jpg",
          // },
          // {
          //   img_url: "./imgs/logo_4.jpg",
          // },
          // {
          //   img_url: "./imgs/logo_5.jpg",
          // },
          // {
          //   img_url: "./imgs/logo_6.jpg",
          // },
          // {
          //   img_url: "./imgs/logo_7.jpg",
          // },
          // {
          //   img_url: "./imgs/logo_8.jpg",
          // },
          // {
          //   img_url: "./imgs/logo_9.jpg",
          // },
          // {
          //   img_url: "./imgs/logo_10.jpg",
          // },
        ],
      },
    ],
    new_id: "",
    newfirstName: "",
    newlastName: "",
    newphone: "",
    newusername: "",
    activeUserId: "",
  };
  activedUser = (index) => {
    this.setState({
      activeUserId: index,
    });
  };
  sendBtn = (event) => {
    let mss = this.state.messages;
    mss.push(event);
    console.log(event);
    this.setState({
      messages: mss,
    });
  };
  enterClick = (e) => {
    console.log(e.code);
  };

  handleOpen = () =>
    this.setState({
      open: true,
    });

  handleClose = () =>
    this.setState({
      open: false,
    });
  SaveUser = () => {
    const {
      new_id,
      newfirstName,
      newlastName,
      newphone,
      newusername,
      usersData,
    } = this.state;
    let newUser = {
      _id: new_id,
      firstName: newfirstName,
      lastName: newlastName,
      phone: newphone,
      username: `@${newusername}`,
    };
    usersData.push(newUser);
    this.setState({
      usersData,
    });
    // localStorage.setItem('usersDate', usersData)
    this.handleClose();
  };
  nameChange = (e) => {
    let name = e.target.value;
    this.setState({
      new_id: this.state.usersData.length + 1,
      newfirstName: name,
    });
  };
  lastNameChange = (e) => {
    let name = e.target.value;
    this.setState({
      newlastName: name,
    });
  };
  phoneChange = (e) => {
    let name = e.target.value;
    this.setState({
      newphone: name,
    });
  };
  userNameChange = (e) => {
    let name = e.target.value;
    this.setState({
      newusername: name,
    });
  };

  render() {
    return (
      <Box width={"100%"} height="100vh" display={"flex"} gap="1%">
        <UserList
          activedUser={this.activedUser}
          data={this.state.usersData}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
        />
        <Messages
          messages={this.state.messages}
          sendBtn={this.sendBtn}
          activeUserId={this.state.activeUserId}
          usersData={this.state.usersData}
        />
        <UserInfo
          usersData={this.state.usersData}
          activeUserId={this.state.activeUserId}
          allMedia={this.state.allMedia}
        />

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { my: 3, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={this.nameChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                onChange={this.lastNameChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                onChange={this.phoneChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={this.userNameChange}
                required
              />
            </Box>
            <Button onClick={this.SaveUser} variant="outlined" color="success">
              Save
            </Button>
            <Button variant="outlined" color="error" onClick={this.handleClose}>
              Cencel
            </Button>
          </Box>
        </Modal>
      </Box>
    );
  }
}

export default App;
