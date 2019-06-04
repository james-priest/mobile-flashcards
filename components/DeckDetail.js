import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButton';
import { gray, textGray, green, white, red } from '../utils/colors';

export class DeckDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = {
    title: 'Deck Details'
  };
  render() {
    const { navigation } = this.props;
    const deck = navigation.getParam('deck', 'Undefined deck');

    return (
      <View style={styles.container}>
        <Deck deck={deck} />
        <View>
          <TouchButton
            btnStyle={{ backgroundColor: gray, borderColor: textGray }}
            txtStyle={{ color: textGray }}
            onPress={() => this.props.navigation.navigate('AddCard')}
          >
            Add Card
          </TouchButton>
          <TouchButton
            btnStyle={{ backgroundColor: green, borderColor: white }}
            txtStyle={{ color: white }}
            onPress={() => this.props.navigation.navigate('Quiz')}
          >
            Start Quiz
          </TouchButton>
        </View>
        <TextButton
          txtStyle={{ color: red }}
          onPress={() => console.log('deck deleted')}
        >
          Delete Deck
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  }
});

export default DeckDetail;
