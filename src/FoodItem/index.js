import React from 'react';

const FoodItem = (props) => {

  const List = props.food_list.map(function(x) {
    console.log(props.food_list);
    return(
      <div key={x.id}>
        <h1>Hello</h1>
        <img src={x.url} alt="Food iamge" />
      </div>
    );

  })

    return(
      <div>
        <List />
      </div>
    );
}
export default FoodItem;
