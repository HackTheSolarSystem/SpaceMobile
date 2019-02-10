import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import  HowToPlay from './HowToPlay.js'
import PlanetView from './PlanetView.js'

class GameMenu extends React.Component{
  render(){
    const { navigation } = this.props
    return (
      <View style={styles.container}>
      <Image style={{width: 400, height: 400}} source={{uri:'https://i.postimg.cc/g0DCd9Mr/Planet-500x500-Earth.png'}}/>
        <Text style={{fontSize: '35px', color: '#ffffff'}}>My Solar System</Text>
          <Button onPress={() => navigation.navigate('PlanetView')} color='#F7CD46' title='Start Game'/>
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