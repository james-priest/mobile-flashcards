import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { white, textGray } from '../utils/colors';
import { connect } from 'react-redux';

const Deck = props => {
  const { deck } = props;

  if (deck === undefined) {
    return <View style={styles.deckContainer} />;
  }
  return (
    <View style={styles.deckContainer}>
      <View>
        <Text style={styles.deckText}>{deck.title}</Text>
      </View>
      <View>
        <Text style={styles.cardText}>{deck.questions.length} cards</Text>
      </View>
    </View>
  );
};
Deck.propTypes = {
  deck: PropTypes.object
};

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 120,
    minHeight: 120,
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
    color: textGray
  }
});

const mapStateToProps = (state, { id }) => {
  const deck = state[id];

  return {
    deck
  };
};

export default connect(mapStateToProps)(Deck);
