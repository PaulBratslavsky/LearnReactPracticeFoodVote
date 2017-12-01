import React, { Component } from 'react';

class FoodItem extends Component {

  render() {

    const List = this.props.food_list.map ( foodItem =>
      <div key={foodItem.id}>
          <h1>{foodItem.name}</h1>
          <img src={foodItem.url} alt="Food iamge" />
        </div>
    )

    return(
      <div>
        {List}
      </div>
    );
  }
}

export default FoodItem;

/***************************
OTHER EXAMPLES
****************************/

/*
const FoodItem = (props) => {

  const List = props.food_list.map ( foodItem =>

      <li key={foodItem.id}>
        <h1>{foodItem.name}</h1>
        <img src={foodItem.url} alt="Food iamge" />
      </li>
  )

    return(
      <ul>
        {List}
      </ul>
    );
}
*/
