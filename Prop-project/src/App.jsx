import React from 'react'
import Cards from './components/Cards'

const App = () => {

  const jobOpenings = [10,20,30];

  return (
    <div className='parent'>
      {
        jobOpenings.map(function(elem,idx){
          
          return <div key={idx}>
            <Card />
          </div>
        
      })}
    </div>
  )
}

export default App
