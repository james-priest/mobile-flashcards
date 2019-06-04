import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';
import { gray, green } from '../utils/colors';
import { handleInitialData } from '../actions/index';

export class DeckList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    handleInitialData: PropTypes.func.isRequired,
    decks: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { decks, navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Mobile Flashcards</Text>
        {Object.values(decks).map(deck => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() => navigation.navigate('DeckDetail', { deck: deck })}
            >
              <Deck deck={deck} />
            </TouchableOpacity>
          );
        })}
        {/* <TouchableOpacity
          style={{ marginBottom: 30 }}
          onPress={() => this.props.navigation.navigate('DeckDetail')}
        >
          <Deck />
        </TouchableOpacity> */}
      </ScrollView>
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
    color: green
    // textDecorationLine: 'underline'
  }
});

const mapStateToProps = decks => ({ decks });

export default connect(
  mapStateToProps,
  { handleInitialData }
)(DeckList);
