import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
  resetDecks
} from '../utils/api.js';

export default class APITest extends React.Component {
  state = {
    data: ''
  };
  componentDidMount() {
    this.handleGetDecks();
  }
  handleGetDecks = () => {
    getDecks().then(result => {
      console.log(JSON.stringify(result));
      this.setState(() => ({
        data: result
      }));
    });
  };
  handleGetDeck = () => {
    getDeck('Redux').then(result => {
      console.log(JSON.stringify(result));
      this.setState({
        data: result
      });
    });
  };
  handleSaveDeck = () => {
    saveDeckTitle('Redux');
  };
  handleAddCard = () => {
    addCardToDeck('Redux', {
      question: 'q1',
      answer: 'a1'
    });
  };
  handleResetDecks = () => {
    resetDecks();
  };
  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={this.handleGetDecks}>
            <Text style={styles.btnText}>Get Decks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleResetDecks}>
            <Text style={styles.btnText}>Reset Decks</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={this.handleGetDeck}>
            <Text style={styles.btnText}>Get Deck</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleSaveDeck}>
            <Text style={styles.btnText}>Add Deck</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleAddCard}>
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginLeft: 10 }}>{JSON.stringify(data)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  btnContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    // width: '100%',
    marginBottom: 20
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});
