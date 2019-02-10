
import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import HowToPlay from './HowToPlay.js'
import PlanetView from './PlanetView.js'
import Counter from './Counter.js'


class GameMenu extends React.Component{
  render(){
    const { navigation } = this.props
    return (
      <View style={styles.container}>
      <Image style={{width: 400, height: 400}} source={{uri:'https://i.postimg.cc/g0DCd9Mr/Planet-500x500-Earth.png'}}/>
        <Text style={{fontSize: 35, color: '#ffffff'}}>My Solar System</Text>
          <Button onPress={() => navigation.navigate('HowToPlay')} color='#F7CD46' title='How to play?'/>
          <Button onPress={() => navigation.navigate('Counter')} color='#F7CD46' title='Start Game'/>
      </View>

    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  /* render function, etc */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default GameMenu