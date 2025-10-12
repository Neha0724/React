import FoodItems from './components/FoodItems';
import ErrorMsg from './components/ErrorMsg';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  let foodItems = ['Dal-Rice','Green Veggies','Roti','Salad','Milk','Ghee'];

  return (
  <React.Fragment>
    <h1 className='food-heading'>Healthy Food</h1>
    <ErrorMsg items={foodItems}></ErrorMsg>
    <FoodItems items={foodItems}></FoodItems>
  </React.Fragment>
  );
};

export default App;
