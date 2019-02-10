import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'

class HowToPlay extends React.Component{
  render(){
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={{fontSize: '50px', color: '#ffffff'}}>Hello</Text>
      </View>
    )

  }
}

export default HowToPlay