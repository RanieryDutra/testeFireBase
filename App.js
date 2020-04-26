import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import firebase from './src/firebaseConnection';​

export default class App extends Component {


  render () {
    return (
    <View style = {styles.container}>
      <Text>
        Olá mundo 
      </Text>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
