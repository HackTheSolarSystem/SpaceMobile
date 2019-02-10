import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class GameMenu extends React.Component{
  render(){
    const { navigation } = this.props
    return (
      <View>
        <Text>Augmented Game</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AugmentedGame')}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    )

  }
}

export default GameMenu