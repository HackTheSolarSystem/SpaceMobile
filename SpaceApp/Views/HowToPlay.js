import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'

class HowToPlay extends React.Component{
  render(){
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={{fontSize: '30', color: '#ffffff'}}>How to play {"\n"}</Text>
        <Text style={{fontSize: '20', color: '#ffffff'}}>
1- You and your teammates will be assigned a planet in the solar system {"\n"}{"\n"}
2- Follow the directions to stand and rotate around the sun {"\n"}{"\n"}
3- Try to assemble without talking to each other {"\n"}{"\n"}
4- The fastest team to assemble is the winning team{"\n"}{"\n"}
      </Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});




export default HowToPlay

