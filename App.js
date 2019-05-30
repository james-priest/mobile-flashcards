import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckDetail from './components/DeckDetail';
import AddCard from './components/AddCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <DeckList /> */}
        {/* <AddDeck /> */}
        {/* <DeckDetail /> */}
        <AddCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    // justifyContent: 'space-around'
    borderWidth: 2,
    borderColor: 'orange'
  }
});
