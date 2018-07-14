/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { 
    Image,
    Platform, 
    StyleSheet, 
    Text,
    View 
} from "react-native";

import { Card, ListItem, Button } from 'react-native-elements'

import Deck from "./src/Components/Deck.js"

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 2,
    text: "Card #2",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];

export default class App extends Component {
  renderCard(card) {
      console.log(`uri :${card.uri}`)
      return (
          <Card 
            title={card.text}
            key={card.id}
            image={{uri: card.uri}}
          >
              <Text
                  style={{
                      margin: 10
                      }}
              >
                  Customer
              </Text>

              <Button
                icon={{name: 'code'}}
                backgroundColor="#03A9F4"
                title="View now"
              />
          
          </Card>
     )
  }
  render() {
    return (
      <View>
          <View style={styles.header}>
              <Text>
                  Header
              </Text>
          </View>
          <Deck 
              data={DATA}
            renderCard={ this.renderCard }
          />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
    header:{
        marginTop: Platform.OS==='ios'? 20 : 0,
        padding: 20,
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        justifyContent: "center"
    },
    card:{
        padding: 10,
        margin:10,
    }
})
