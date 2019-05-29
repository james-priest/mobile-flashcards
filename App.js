import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AddDeck from './components/AddDeck';
// import APITest from './components/APITest';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddDeck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
});
