import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

export const MainContainer = () => {
  return (
    <div>
      <div className="flex">
        <ButtonList />
        <ButtonList />
        <ButtonList />
        <ButtonList />
        <ButtonList />
        <ButtonList />
        <ButtonList />
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
}
