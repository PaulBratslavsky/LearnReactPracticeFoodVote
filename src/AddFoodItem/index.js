import React, { Component } from 'react';
import ShowFoodItem from '../ShowFoodItem';
import { data } from '../data.js';
console.log(data);

class AddFoodItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            name: '',
            url: '',
            votes: 0,

            foodItemList: data
        }

    }

    handleUpVoteChangeData = (id) => {
        data.filter( item => {
            if ( item.id === id ) {
                console.log(`Food Item with ID: ${id} was upvoted by one vote.`);
            }
        });
    }

    handleDownVoteChangeData = (id) => {
        data.filter( item => {
            if ( item.id === id ) {
                console.log(`Food Item with ID: ${id} was downvotes by one vote.`);
            }
        });
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
                id: Math.floor((Math.random() * 100000) + 1),
                name: this.state.name,
                url: this.state.url,
                votes: this.state.votes,
            };
        
        const NewFoodListArray = this.state.foodItemList ;
        NewFoodListArray.push(data);
        
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
                    <ShowFoodItem 
                        food_list={this.state.foodItemList} 
                        handleUpVoteChangeData={this.handleUpVoteChangeData}
                        handleDownVoteChangeData={this.handleDownVoteChangeData}

                    />
            </div>
        );
    }
}

export default AddFoodItem;