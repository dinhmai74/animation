import React, { Component } from "react";
import { 
    View,
    PanResponder,
    Animated
    Text } from "react-native";

class Deck extends Component {
    constructor(props){
        super(props);
        const panResponder=PanResponder.create({
        })

        this.state={
            panResponder
        };
    }
  renderCards() {
      return this.props.data.map(item=>{
          return this.props.renderCard(item)
      })
  }
  render() {
    console.log("this.props", this.props);
      let content = this.props.data
          ? this.renderCards()
          :null
    return <View>{content}</View>;
  }
}

export default Deck;
