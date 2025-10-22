import React from 'react'

const Cards = (props) => {
  return (
    <div className='card'>

      <div className='top'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtBT0mN8YPG6A5i3q7fnG8v0JhEq38ok6ckz0llZ4p3Fz1CBepIXwAxsNi5stCrmbLbI&usqp=CAU'></img>
        <button>Save</button>
      </div>

      <div className='center'>
        <h3>{props.company}<span>5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
        <div className='tag'>
          <h4>Part-Time</h4>
          <h4>Senior level</h4>
        </div>
      </div>

      <div className='bottom'>
        <div className='tag2'>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
      
    </div>
  )
}

export default Cards
