import React from 'react'

const Message = ({ pseudo, message, isUser}) => (
  <p className={isUser(pseudo) ? "user-message" : "not-user-message"}>
    <strong>{isUser(pseudo) ? null : pseudo + ' : '}</strong>
    {message}
  </p>
)

export default Message