import React, { Component } from 'react';
import ShowFoodItem from '../ShowFoodItem';

class AddFoodItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: new Date(),
            name: '',
            url: '',
            votes: 0,

            foodItemList: [
                {id: 1, name: 'foo', votes: 3, url: 'https://static.pexels.com/photos/461198/pexels-photo-461198.jpeg'},
                {id: 2, name: 'foo bar', votes: 1, url: 'https://static.pexels.com/photos/376464/pexels-photo-376464.jpeg'},
                {id: 3, name: 'foo bar foo', votes: 6, url: 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'}
            ]
        }

    }

    handleChangeOnInputName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeOnInputUrl = (event) => {
        this.setState({
            url: event.target.value
        });
    }

    handleOnFormSubmit = (event) => {
        event.preventDefault();        
        console.log("Submit Button Clicked");

        let data = { 
                id: this.state.id,
                name: this.state.name,
                url: this.state.url,
                votes: this.state.votes,
            };
        
        const NewFoodListArray = this.state.foodItemList ;
        NewFoodListArray.push(data);
        console.log(data, "This is data");

        this.setState({
            foodItemList: NewFoodListArray
        });

        this.setState(
            {
                name: '',
                url: ''
            }
        );
    }

    render() {
        return(
            <div>
                <h2>Add Item</h2>
                <form onSubmit={this.handleOnFormSubmit}>
                    <input type="text" placeholder="Enter food Item" onChange={this.handleChangeOnInputName} value={this.state.name}></input>
                    <input type="text" placeholder="Enter Image Url" onChange={this.handleChangeOnInputUrl} value={this.state.url}></input>

                    <button type="submit">Add</button>
                    
                </form>
                <ShowFoodItem food_list={this.state.foodItemList} />
            </div>
        );
    }
}

export default AddFoodItem;