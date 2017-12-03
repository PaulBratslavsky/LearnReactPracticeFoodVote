import React from 'react';
import ReactDOM from 'react-dom';
import FoodItem from './FoodItem'

let food_list = [
  {id: 1, name: 'foo', votes: 0, url: 'https://static.pexels.com/photos/461198/pexels-photo-461198.jpeg'},
  {id: 2, name: 'foo bar', votes: 0, url: 'https://static.pexels.com/photos/376464/pexels-photo-376464.jpeg'},
  {id: 3, name: 'foo bar foo', votes: 0, url: 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'}
];

const App = () => {
    return(
      <div>
        <h1>My App</h1>
        <FoodItem food_list={food_list}/>
      </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
