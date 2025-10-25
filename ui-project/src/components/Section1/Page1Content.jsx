import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Page1Content = (props) => {
  return (
    <div className='px-16 pb-16 pt-6 flex h-[90vh] gap-10 items-center'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
