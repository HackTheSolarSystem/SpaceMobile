import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'

class PlanetView extends React.Component{
  render(){
    const { navigation } = this.props
    return (
      <View style={styles.container}>
      <Image style={{width: 400, height: 400}} source={{uri:'https://i.postimg.cc/PrF3WWx3/Planet-500x500.png'}}/>
        <Text style={{fontSize: 50, color: '#ffffff'}}>You are Saturn</Text>
        <Text>This is Saturn</Text>
        <Text>You are 0 out of 50 steps from the sun</Text>
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

export default PlanetView