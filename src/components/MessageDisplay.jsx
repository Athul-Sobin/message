import React from 'react';

const MessageDisplay = ({ message }) => {
  return (
    <div>
      <h3>Message Preview:</h3>
      <p>{message}</p>
    </div>
  );
};

export default MessageDisplay;
