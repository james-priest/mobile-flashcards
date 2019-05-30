import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function TouchButton({
  children,
  onPress,
  btnStyle = {},
  txtStyle = {}
}) {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
        <Text style={[styles.btnText, txtStyle]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 20
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`,
    borderWidth: 1,
    borderColor: '#999'
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

TouchButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnStyle: PropTypes.object,
  txtStyle: PropTypes.object
};
