import { Box, Button } from "@mui/material";
import React, { Component } from "react";

class UserList extends Component {
  acTivedUser = (index)=>{
    console.log(index);
    this.props.activedUser(index)
  }
  render() {
    const { data, handleClose, handleOpen } = this.props;
    return (
      <Box width={"30%"} height="100%" sx={{ backgroundColor: "gray" }}>
        <Box
          width={"100%"}
          sx={{ my: 3 }}
          display="flex"
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ width: "70%", fontSize: "24px" }}
          >
            Add Contact
          </Button>
        </Box>
        <Box
          width={"100%"}
          sx={{ mt: 5 }}
          display="flex"
          justifyContent={"center"}
          flexDirection="column"
          alignItems={"center"}
          gap="10px"
        >
          {/* <Button variant="outlined" sx={{backgroundColor: 'black', color: 'white', outline: 'none', width: "70%", fontSize: "24px" }}>
            Dilshod Murtazoyev
          </Button> */}
          {data.map((item, index) => (
            <Button
              onClick={()=>this.acTivedUser(index)}
              key={index}
              variant="outlined"
              sx={{
                backgroundColor: "black",
                color: "white",
                outline: "none",
                width: "70%",
                fontSize: "24px",
              }}
            >
              {item.firstName} {item.lastName}
            </Button>
          ))}
        </Box>
      </Box>
    );
  }
}

export default UserList;
