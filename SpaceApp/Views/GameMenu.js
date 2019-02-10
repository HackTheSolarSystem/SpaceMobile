import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
    paddingTop: 20
  }
});

class GameMenu extends React.Component{
  render(){
    const { navigation } = this.props
    return (
      <Fragment>
        <View>
          <Text style={styles.title}>Augmented Game</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('AugmentedGame')}>
            <Text style={{alignItems: 'center'}}>Start</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    )
  }
}

export default GameMenu