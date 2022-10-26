import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import logo from "./imgs/logo_7.jpg";
import { spacing } from "@mui/system";

class UserInfo extends Component {
  state = {
    values: "",
  };

  handleChange = (e, val) => {
    let v = val;
    console.log(v);
    this.setState({
      values: v,
    });
  };

  render() {
    const { usersData, activeUserId, allMedia } = this.props;
    const newLocal = "100%";
    console.log(allMedia);
    return (
      <Box width={"30%"} height="100%" sx={{ backgroundColor: "gray" }}>
        {activeUserId === "" ? (
          ""
        ) : (
          <>
            <Box
              sx={{ width: "100%", height: "40%", border: "1px solid black" }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "45%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: "150px", height: "150px" }}
                  />
                </Stack>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ color: "white", mt: "10px" }}>
                  Phone:{"+998" + " " + usersData[activeUserId].phone}
                </Typography>
                <Typography variant="h5" sx={{ color: "white", mt: "10px" }}>
                  UserName:{usersData[activeUserId].username}
                </Typography>
                <Typography variant="h5" sx={{ color: "white", mt: "10px" }}>
                  FullName:
                  {usersData[activeUserId].firstName +
                    " " +
                    usersData[activeUserId].lastName}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ width: "100%", height: "60%", border: "1px solid white" }}
            >
              <Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                  }}
                >
                  <TabContext value={this.state.values}>
                    <Box>
                      <TabList
                        value={1}
                        onChange={this.handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab label="Media" value="1" />
                        <Tab label="Audio" value="2" />
                        <Tab label="Links" value="3" />
                      </TabList>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "55vh",
                        // backgroundColor: "black",
                      }}
                    >
                      <TabPanel value="1">
                        <Box
                          sx={{
                            display: "flex",
                            gap: "30px",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <ImageList
                            sx={{
                              width: 550,
                              height: 500,
                              ml: "-15px",
                              mt: "-10px",
                            }}
                            cols={3}
                            justifyContent={spacing}
                            rowHeight={130}
                          >
                            {activeUserId === ""
                              ? ""
                              : allMedia
                                  .filter(
                                    (prev) => prev.user_id === activeUserId
                                  )
                                  .map((item, index) => (
                                    <ImageListItem>
                                      <img src={item.igms[index].img_url} />
                                    </ImageListItem>
                                  ))}
                            {/* <ImageListItem>
                              <img src={logo} />
                            </ImageListItem> */}
                          </ImageList>
                        </Box>
                      </TabPanel>
                      <TabPanel
                        value="2"
                        sx={{ width: "100%", height: "100%" }}
                      >
                        Item Two
                      </TabPanel>
                      <TabPanel value="3">Item Three</TabPanel>
                    </Box>
                  </TabContext>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    );
  }
}

export default UserInfo;
