import React from "react";

const LiveChat = ({name, message}) => {

  return (
    <div className='flex mt-2'>
        <img
          className="h-8"
          alt="user-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&s"
        ></img>
        <div className='ml-2 font-bold'>
            {name}
        </div>
        <h3 className='ml-2'>{message}</h3>
    </div>
  )
}

export default LiveChat
