import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TouchButton from './TouchButton';

export class AddDeck extends Component {
  state = {
    text: ''
  };
  handleChange = text => {
    this.setState({ text });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={this.state.value}
            onChangeText={this.handleChange}
          />
        </View>
        <TouchButton
          btnStyle={{ backgroundColor: 'gray' }}
          onPress={() => console.log('deck created')}
        >
          Create Deck
        </TouchButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderWidth: 1,
    borderColor: 'red'
    // alignItems: 'stretch',
    // textAlign: 'center'
  },
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40
  }
});

export default AddDeck;
