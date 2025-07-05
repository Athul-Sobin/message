import React from 'react';

const MessageInput = ({ setMessage }) => {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input className='input'
        type="text"
        placeholder="Enter a message..."
        onChange={handleChange}
      />
    </div>
  );
};

export default MessageInput;
