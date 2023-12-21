import React, { useState } from 'react'
import "./ListItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

export default function ListItem({index}) {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://v4.cdnpk.net/videvo_files/video/free/video0483/large_watermarked/_import_60d962f06b3ef8.86089157_FPpreview.mp4";
  return (
    <div
    className='listItem'
    onMouseEnter={()=>{setIsHovered(true)}}
    onMouseLeave={()=>{setIsHovered(false)}}
    style={{left : isHovered && index*229 - 50 + index*2.5}}
    >
      <img src="https://rare-gallery.com/thumbnail/391592-kate-2021-netflix-movie-netflix-movie-2021-poster.jpg" alt="" />
      
      {
        isHovered && 
          <>
            <video src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className='icon' />
                <AddIcon className='icon' />
                <ThumbUpOutlinedIcon className='icon' />
                <ThumbDownOutlinedIcon className='icon' />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='ageLimit'>+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum facere dolore rerum non vero.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
      }
    </div>
  )
}
