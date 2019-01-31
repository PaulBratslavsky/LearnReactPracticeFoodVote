import React from 'react';
import FoodItemList from '../FoodItemList';

const ShowFoodItem = (props) => {
    
    let showFoodListSorted = props.food_list.sort( (a,b) => {
        console.log(a.id)
        return b.votes - a.votes; 
    } );
    
    showFoodListSorted = props.food_list.map( item => <FoodItemList key={item.id} foodItem={item} handleUpVoteChangeData={props.handleUpVoteChangeData} handleDownVoteChangeData={props.handleDownVoteChangeData}/>);
    
    return(
        <div>
            {showFoodListSorted}
        </div>
    );
}

export default ShowFoodItem;