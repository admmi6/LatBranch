import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';

const undikshaIcon = require('./images/logo.png');

class MainApp extends Component {
  state = {
    liked: false,
  };

  _onPressBtn = () => {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const likedStyles = this.state.liked ? styles.liked : null;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._onPressBtn}
          style={styles.btn}
          underlayColor="green"
        >
        <Image source={undikshaIcon} style={[styles.icon, likedStyles]} />
        </TouchableHighlight>
        <Text style={styles.text}>Kamu suka logo ini ?</Text>
        <Image source={undikshaIcon} style={[styles.icon, likedStyles]} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    //tintColor: 'blue',
  },
  liked: {
    tintColor: 'blue',
  },
  text: {
    marginTop: 20,
  },
});

export default MainApp;
