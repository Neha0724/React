import React from 'react'
import CardContent from './CardContent'

const Card = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-80 shrink-0 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} ></img>
      <CardContent id={props.id} tag={props.tag} />
    </div>
  )
}

export default Card
