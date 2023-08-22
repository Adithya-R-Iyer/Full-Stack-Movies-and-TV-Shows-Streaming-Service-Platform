import React from 'react'
import "./Watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video src="https://v4.cdnpk.net/videvo_files/video/free/video0483/large_watermarked/_import_60d962f06b3ef8.86089157_FPpreview.mp4" className='video' autoPlay progress controls />
    </div>
  )
}


export default Watch
