import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'skyblue',
        }}>
        <View style={{width: 50,height: 50,backgroundColor: 'black', alignSelf: 'flex-end'}} />
        <View style={{ width: 50, height: 50, backgroundColor: 'black', alignSelf: 'center' }} />
        <View
          style={{ width: 50, height: 50, backgroundColor: 'black' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rectangulo: {
    backgroundColor: '#000',
    width: 50,
    height: 50,
  },
});