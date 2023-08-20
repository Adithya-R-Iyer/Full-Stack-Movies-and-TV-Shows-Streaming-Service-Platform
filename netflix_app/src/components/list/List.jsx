import React, { useRef, useState} from 'react'
import "./List.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import ListItem from '../listitem/listitem';
import ListItem from '../listitems/ListItem';

const List = () => {

  const [slideNo, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef()

  const handleClick = (direction)=> {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x -50
    if(direction === "left" && slideNo > 0) {
      setSlideNumber(slideNo-1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
    }
    else if(direction === "right" && slideNo<4) {
      setSlideNumber(slideNo+1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  }

  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon className='sliderArrow left' onClick={()=>{handleClick("left")}} style={{display : !isMoved && "none"}}/>
        <div className="container" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
            <ListItem index={10}/>
        </div>
        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>{handleClick("right")}}/>
      </div>
    </div>
  )
}


export default List
