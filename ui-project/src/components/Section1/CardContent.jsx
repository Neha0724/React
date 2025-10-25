import React from 'react'

const CardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
      <h1 className='bg-white rounded-full text-2xl font-semibold h-12 w-12 flex justify-center items-center'>{props.id+1}</h1>
      <div>
        <p className='text-xl leading-normal text-white mb-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam placeat eius soluta blanditiis accusantium? Eos!</p>
        <div className='flex justify-between'>
          <button className='bg-blue-600 font-medium text-white px-8 py-2 rounded-full'>{props.tag}</button>
          <button className='bg-blue-600 font-medium text-white px-4 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default CardContent
