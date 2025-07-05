import React, { useState } from 'react';
import MessageInput from './MessageInput';
import MessageDisplay from './MessageDisplay';

const MessageApp = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="container">
      <h2>Message Sharing App</h2>
      <MessageInput setMessage={setMessage} />
      <MessageDisplay message={message} />
    </div>
  );
};

export default MessageApp;
