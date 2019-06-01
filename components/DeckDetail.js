import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButton';
import { gray } from '../utils/colors';

export class DeckDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = {
    title: 'Deck Details'
  };
  render() {
    return (
      <View style={styles.container}>
        <Deck />
        <View>
          <TouchButton
            btnStyle={{ backgroundColor: 'white' }}
            txtStyle={{ color: 'black' }}
            onPress={() => this.props.navigation.navigate('AddCard')}
          >
            Add Card
          </TouchButton>
          <TouchButton
            btnStyle={{ backgroundColor: 'black' }}
            txtStyle={{ color: 'white' }}
            onPress={() => this.props.navigation.navigate('Quiz')}
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
    // borderWidth: 1,
    // borderColor: 'green',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  }
});

export default DeckDetail;
