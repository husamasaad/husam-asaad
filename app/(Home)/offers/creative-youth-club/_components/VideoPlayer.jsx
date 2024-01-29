'use client'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='p-4 overflow-hidden'>
      {isClient && <ReactPlayer url='/furniro.mp4' controls={true} />}
    </div>
  )
}

export default VideoPlayer