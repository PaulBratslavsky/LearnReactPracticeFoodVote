import React, { Component } from 'react';

class FoodItem extends Component {

  constructor(props) {
      super(props);
      this.state = {
        votes: 0
      };
      this.onButtonClickUpVote = this.onButtonClickUpVote.bind(this)
      this.onButtonClickDownVote = this.onButtonClickDownVote.bind(this)
    }

  onButtonClickUpVote() {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  onButtonClickDownVote() {
    this.setState({
      votes: this.state.votes - 1
    });
  };


  render() {

    const foodItemStyle = {
      display: 'inline-block',
      textAlign: 'center',
      margin: 20,
      height: 500,
      width: 300,
      padding: 0,
      backgroundColor: 'white',
      WebkitFilter: 'drop-shadow(0px 0px 5px #555)',
      filter: 'drop-shadow(0px 0px 5px #555)'
    };

    const imageItemStyle = {
      height: 200,
      width: 200,
      marginTop: 20,
      borderRadius: '50%'
    };

    const List = this.props.food_list.map ( foodItem =>
      <div key={foodItem.id} style={foodItemStyle}>
          <h1>{foodItem.name}</h1>
          <img src={foodItem.url} style={imageItemStyle} alt="Food iamge" />
          <p>Vote Up</p>
          <button onClick={this.onButtonClickUpVote}>+1</button>
          <p>Vote Down</p>
          <button onClick={this.onButtonClickDownVote}>-1</button>
          <p>Total Votes: {this.state.votes}</p>
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
