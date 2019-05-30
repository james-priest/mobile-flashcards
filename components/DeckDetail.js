import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButton';

export class DeckDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck />
        <View>
          <TouchButton
            btnStyle={{ backgroundColor: 'white' }}
            txtStyle={{ color: 'black' }}
            onPress={() => console.log('card added')}
          >
            Add Card
          </TouchButton>
          <TouchButton
            btnStyle={{ backgroundColor: 'black' }}
            txtStyle={{ color: 'white' }}
            onPress={() => console.log('quiz started')}
          >
            Start Quiz
          </TouchButton>
          <TextButton
            txtStyle={{ color: 'red' }}
            onPress={() => console.log('deck deleted')}
          >
            Delete Deck
          </TextButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'green'
  }
});

export default DeckDetail;
