import React from 'react';
import FoodItem from '../FoodItem';

const ShowFoodItem = (props) => {
    
    const showFoodList = props.food_list.map( item => <FoodItem foodItem={item}/> );

    return(
        <div>
            <h2>This is from ShowFoodItem</h2>
            {showFoodList}
        </div>
    );
}

export default ShowFoodItem;