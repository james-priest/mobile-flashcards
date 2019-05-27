import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDecks } from './utils/api';

export default class App extends React.Component {
  state = {
    data: ''
  };
  componentDidMount() {
    getDecks().then(result => {
      console.log(JSON.stringify(result));
      this.setState(() => ({
        data: result
      }));
    });
  }
  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
