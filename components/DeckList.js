import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Deck from './Deck';
import { gray } from '../utils/colors';

export class DeckList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mobile Flashcards</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DeckDetail')}
        >
          <Deck />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DeckDetail')}
        >
          <Deck />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DeckDetail')}
        >
          <Deck />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: 'darkgreen'
  }
});

export default DeckList;
