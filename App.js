import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DeckList from './components/DeckList';
// import APITest from './components/APITest';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
  }
});
