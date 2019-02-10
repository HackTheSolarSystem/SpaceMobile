import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import CountDown from 'react-native-countdown-component';


class PlanetView extends React.Component{
  render(){
    const { navigation } = this.props
    return (
        <View style={styles.container}>
      <CountDown
            style={styles.container}
          until={120}
          size={20}
          timeToShow={['M','S']}
        />
      <Image style={{width: 400, height: 400}} source={{uri:'https://i.postimg.cc/PrF3WWx3/Planet-500x500.png'}}/>
        <Text style={{fontSize: 50, color: '#ffffff'}}>You are Saturn</Text>
        <Text style={{fontSize: 20, color: '#ffffff'}}>You are 0 out of 50 steps from the sun</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
    },
  });

export default PlanetView