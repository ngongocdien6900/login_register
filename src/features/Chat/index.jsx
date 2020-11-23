import Container from 'features/Auth/LoginForm/@material-ui/core/Container';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';

let socket;
const ENDPOINT = 'localhost:5000';

function ChatFeatures() {
  const [message, setMessage] = useState([]);

  useEffect(() => {

    //create new connect
    socket = io(ENDPOINT);

    //setup response
    socket.on('message-welcome', (data) => {
      const newMessage = {
        message: data,
      };
      const newMessageList = [...message, newMessage];
      setMessage(newMessageList);
    });

    //update socket

    //disconnect
    return () => socket.disconnect();

  }, [ENDPOINT]);

  //handle emit


  const handleChatFormSubmit = (values) => {

    const newMessage = {
      message: values.message,
    };

    const newMessageList = [...message, newMessage];

    setMessage(newMessageList);
  };

  return (
    <Container maxWidth="md">
      <ChatList messageList={message} />
      <ChatForm onSubmit={handleChatFormSubmit} />
    </Container>
  );
}

export default ChatFeatures;
