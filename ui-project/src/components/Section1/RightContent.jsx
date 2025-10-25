import React from 'react'
import Card from './Card'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full  flex overflow-x-auto flex-nowrap gap-10 rounded-4xl p-6 w-2/3'>
      {props.users.map(function(elem, idx)
      {
        return <Card key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
