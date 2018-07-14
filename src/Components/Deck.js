import React, { Component } from "react";
import { 
    View,
    PanResponder,
    Animated ,
    Dimensions,
    Text } from "react-native";

const SCREEN_WIDTH=Dimensions.get('window').width;
    
class Deck extends Component {
    constructor(props){
        super(props);
        const position=new Animated.ValueXY();
        this.panResponder=PanResponder.create({
            onStartShouldSetPanResponder: ()=>true,
            onPanResponderMove : (event,gesture)=>{
                position.setValue({x: gesture.dx})
            },
            onPanResponderRelease: ()=>{}
        })
        this.position=position
    }
    getCardStyle(){
        const rotate=this.position.x.interpolate({
            inputRange:[-SCREEN_WIDTH*1.5,0,SCREEN_WIDTH*1.5],
            outputRange:['-120deg','0deg','120deg']
        })
        return {
            ...this.position.getLayout(),
            transform: [{
                rotate
            }]
        }
    }
  renderCards() {
      return this.props.data.map((item,index)=>{
          if(index===0){
              return(<Animated.View
                  style={
                      this.getCardStyle()
                      }
                {...this.panResponder.panHandlers}
                key={item.id}
            >
                  {this.props.renderCard(item)}
              </Animated.View> 
              )
          }
          return this.props.renderCard(item)
      })
  }
  render() {
    console.log("this.props", this.props);
      let content = this.props.data
          ? this.renderCards()
          :null
      return (
          <View >
              {content}
          </View>
      )
  }
}

export default Deck;
