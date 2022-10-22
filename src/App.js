import React, { Component } from 'react';
import { 
  Box,
  Typography 
} from '@mui/material'
import UserList from './Components/UserList/UserList';
import Messages from './Components/Messages/Messages';
import UserInfo from './Components/UserInfo/UserInfo';

class App extends Component {
  state = { 
    usersData: [
      {
        _id: 1,
        firstName: 'Dilshod',
        lastName: 'Murtazoyev',
        phone: '+998990145867',
        username: 'DilshodMurtazoyev'
      },
      {
        _id: 2,
        firstName: 'MUhammad',
        lastName: 'Qobiljonov',
        phone: '+998990145867',
        username: 'DilshodMurtazoyev'
      },
      {
        _id: 3,
        firstName: 'Dilshod',
        lastName: 'Murtazoyev',
        phone: '+998990145867',
        username: 'DilshodMurtazoyev'
      },
      {
        _id: 4,
        firstName: 'Dilshod',
        lastName: 'Murtazoyev',
        phone: '+998990145867',
        username: 'DilshodMurtazoyev'
      },
    ],
    messages: [
      {
        title: "Salom Yaxshimisiz",
        createdDate: '16:30',
        user_id: 2,
        send_who_titles: [
          {
            title: 'Valeykum',
            createdDate: '16:31'
          }
        ]
      },
      {
        title: "Salom Yaxshimisiz",
        createdDate: '16:30',
        user_id: 1,
        send_who_titles: [
          {
            title: 'Valeykum',
            createdDate: '16:31'
          }
        ]
      },
      {
        title: "Salom Yaxshimisiz",
        createdDate: '16:30',
        user_id: 1,
        send_who_titles: [
          {
            title: 'Valeykum',
            createdDate: '16:31'
          }
        ]
      },
      {
        title: "Salom Yaxshimisiz",
        createdDate: '16:30',
        user_id: 1,
        send_who_titles: [
          {
            title: 'Valeykum Assalom',
            createdDate: '16:31'
          }
        ]
      },
    ]
  }
  render() {
    return (
      <Box width={'100%'} height='100vh' display={'flex'} gap='1%'>
        <UserList data={this.state.usersData}/>
        <Messages messages={this.state.messages}/>
        <UserInfo/>
      </Box>
    );
  }
}

export default App;
