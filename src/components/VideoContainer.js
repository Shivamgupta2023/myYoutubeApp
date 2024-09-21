import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constant'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const VideoContainer = () => {

  const [containerData, setContainerData] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    getVideo()
  }, [])

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API_KEY)
    let jsonData = await data.json()
    setContainerData(jsonData)
    console.log('22', jsonData)
  }

  const getVideoContainerData = () => {
    return containerData?.items?.map((itm) => {
      return (
        <Link to={'/watch?v=' + itm.id}>
        <>
          <div className="m-8 shadow-lg rounded-xl" onClick={dispatch(toggleMenu())}>
            <img
              className="rounded-xl"
              alt="video"
              src={itm?.snippet?.thumbnails?.medium?.url}
            />
            <ul className='w-80 p-2'>
              <li className='font-bold'>{itm?.snippet?.title}</li>
              <li>{itm?.snippet?.channelTitle}</li>
              <li>{itm?.statistics?.viewCount} views</li>
              {/* <li>{itm?.snippet?.statistics?.}</li> */}
            </ul>
          </div>
        </>
        </Link>
      );
    });
  };

  return (
    <div className='flex flex-wrap shadow-lg'>
      {getVideoContainerData()}
    </div>
  )
}

export default VideoContainer