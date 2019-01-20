import React from 'react';
import ReactDOM from 'react-dom';
import AddFoodItem from './AddFoodItem';


const App = () => {
  

  return(
    <div>
      <h1>My App</h1>
      <AddFoodItem />
    </div>  
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
