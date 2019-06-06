import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { textGray, white, darkGray, gray } from '../utils/colors';

export default function TouchButton({
  children,
  onPress,
  btnStyle = {},
  txtStyle = {},
  disabled = false
}) {
  const disabledButton = disabled ? styles.btnDisabled : {};
  const disabledButtonText = disabled ? styles.btnTextDisabled : {};
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        // style={[styles.btn, btnStyle, disabled ? styles.btnDisabled : null]}
        style={[styles.btn, btnStyle, disabledButton]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={[
            styles.btnText,
            txtStyle,
            // disabled ? styles.btnTextDisabled : {}
            disabledButtonText
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
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
  btnDisabled: {
    backgroundColor: gray,
    borderColor: darkGray
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: white
  },
  btnTextDisabled: {
    color: darkGray
  }
});

TouchButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  btnStyle: PropTypes.object,
  txtStyle: PropTypes.object,
  disabled: PropTypes.bool
};
