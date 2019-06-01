import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import AppNavigator from './navigation/AppNavigator';

function FlashcardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
FlashcardStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashcardStatusBar backgroundColor="green" barStyle="light-content" />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde'
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: 50,
    // paddingBottom: 20,
    // paddingLeft: 20,
    // paddingRight: 20,
    // justifyContent: 'space-around'
    // borderWidth: 2,
    // borderColor: 'orange'
  }
});
