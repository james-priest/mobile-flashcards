import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import TextButton from './TextButton';
import TouchButton from './TouchButton';
import { gray, green, red, textGray, darkGray, white } from '../utils/colors';

const screen = {
  QUESTION: 'question',
  ANSWER: 'answer',
  RESULT: 'result'
};

export class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  state = {
    screen: screen.QUESTION
  };
  render() {
    switch (this.state.screen) {
      case screen.QUESTION:
        return (
          <View style={styles.container}>
            <View style={styles.block}>
              <Text style={styles.count}>2 / 2</Text>
            </View>
            <View style={[styles.block, styles.questionContainer]}>
              <Text style={styles.questionText}>Question</Text>
              <Text style={styles.title}>
                Does React Native work with Android?
              </Text>
            </View>
            <TextButton
              txtStyle={{ color: red }}
              onPress={() => this.setState({ screen: screen.ANSWER })}
            >
              Answer
            </TextButton>
            <View>
              <TouchButton
                btnStyle={{ backgroundColor: green, borderColor: white }}
                onPress={() => this.setState({ screen: screen.RESULT })}
              >
                Correct
              </TouchButton>
              <TouchButton
                btnStyle={{ backgroundColor: red, borderColor: white }}
                onPress={() => this.setState({ screen: screen.RESULT })}
              >
                Incorrect
              </TouchButton>
            </View>
          </View>
        );
      case screen.ANSWER:
        return (
          <View style={styles.container}>
            <View style={styles.block}>
              <Text style={styles.count}>2 / 2</Text>
            </View>
            <View style={[styles.block, styles.questionContainer]}>
              <Text style={styles.questionText}>Answer</Text>
              <Text style={styles.title}>
                Yes! React Native works with Android, iOS, Windows, & Web.
              </Text>
            </View>
            <TextButton
              txtStyle={{ color: red }}
              onPress={() => this.setState({ screen: screen.QUESTION })}
            >
              Question
            </TextButton>
            <View>
              <TouchButton
                btnStyle={{ backgroundColor: green, borderColor: white }}
                onPress={() => this.setState({ screen: screen.RESULT })}
              >
                Correct
              </TouchButton>
              <TouchButton
                btnStyle={{ backgroundColor: red, borderColor: white }}
                onPress={() => this.setState({ screen: screen.RESULT })}
              >
                Incorrect
              </TouchButton>
            </View>
          </View>
        );
      case screen.RESULT:
        return (
          <View style={styles.container}>
            <View style={styles.block}>
              <Text style={styles.count}>Done</Text>
            </View>
            {/* <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                Quiz Complete!
              </Text>
              <Text style={styles.resultTextBad}>1 / 4 correct</Text>
            </View>
            <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                Percentage correct
              </Text>
              <Text style={styles.resultTextBad}>25%</Text>
            </View> */}
            <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                Quiz Complete!
              </Text>
              <Text style={styles.resultTextGood}>3 / 4 correct</Text>
            </View>
            <View style={styles.block}>
              <Text style={[styles.count, { textAlign: 'center' }]}>
                Percentage correct
              </Text>
              <Text style={styles.resultTextGood}>75%</Text>
            </View>
            <View>
              <TouchButton
                btnStyle={{ backgroundColor: green, borderColor: white }}
                onPress={() => this.setState({ screen: screen.QUESTION })}
              >
                Restart Quiz
              </TouchButton>
              <TouchButton
                btnStyle={{ backgroundColor: gray, borderColor: textGray }}
                txtStyle={{ color: textGray }}
                onPress={() => this.props.navigation.goBack()}
              >
                Back to Deck
              </TouchButton>
            </View>
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray,
    justifyContent: 'space-around'
  },
  block: {
    marginBottom: 20
  },
  count: {
    fontSize: 24
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  questionContainer: {
    borderWidth: 1,
    borderColor: darkGray,
    backgroundColor: white,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20
  },
  questionText: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 20
  },
  resultTextGood: {
    color: green,
    fontSize: 46,
    textAlign: 'center'
  },
  resultTextBad: {
    color: red,
    fontSize: 46,
    textAlign: 'center'
  }
});

export default Quiz;
