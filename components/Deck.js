import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { white, gray, green } from '../utils/colors';

const Deck = () => {
  return (
    <View style={styles.deckContainer}>
      <View>
        <Text style={styles.deckText}>Deck 1</Text>
      </View>
      <View>
        <Text style={styles.cardText}>3 cards</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deckContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 120,
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: white,
    borderRadius: 5,
    marginBottom: 10
  },
  deckText: {
    fontSize: 28
  },
  cardText: {
    fontSize: 18,
    color: 'gray'
  }
});

export default Deck;
