import React from 'react'
import './chatRow.css'

const ChatRow = (props) => {
    const {chatAvatar, chatName} = props
  return (
    <>
        <div className='chatLayout'>
            <img id='avatarImage' src={chatAvatar} alt="" />
            <h5 id='avatarName'>{chatName}</h5>

        </div>
      
    </>
  )
}

export default ChatRow
