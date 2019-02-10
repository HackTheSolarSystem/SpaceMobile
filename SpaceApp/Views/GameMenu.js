
import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import HowToPlay from './HowToPlay.js'
import PlanetView from './PlanetView.js'
import Counter from './Counter.js'


class GameMenu extends React.Component{
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#000000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render(){
    const { navigation } = this.props
    return (
      <View style={styles.container}>
      <Image style={{width: 376, height: 168 }} source={{uri:'https://i.postimg.cc/NfkS41RR/solar-logo.png'}}/>
      <Image style={{width: 400, height: 400}} source={{uri:'https://i.postimg.cc/k5K16fpK/kisspng-the-nine-planets-solar-system-saturn-clip-art-solar-5abe.png'}}/>
          <Button color="white" type="outline" onPress={() => navigation.navigate('Counter')} color='#F7CD46' title='Start Game'/>
          <Button onPress={() => navigation.navigate('HowToPlay')} color='#F7CD46' font='futura' title='How to play?'/>
      </View>

    )
  }
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