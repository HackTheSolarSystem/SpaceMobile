import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import CountDown from 'react-native-countdown-component';
import PlanetView from './PlanetView.js'


class Counter extends React.Component{
  render(){
    const { navigation } = this.props
    return (
        <CountDown
            style={styles.container}
          until={3}
          onFinish={() => navigation.navigate('GameLogic')}
          size={150}
          timeToShow={['S']}
          digitStyle={{backgroundColor: '#000000'}}
          digitTxtStyle={{color: '#F5D048'}}
        />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
});




export default Counter
