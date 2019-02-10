import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import CountDown from 'react-native-countdown-component';


class PlanetView extends React.Component{
  render(){
    const { navigation, name, distanceActual, distanceRoom, currentStepCount } = this.props
    return (
        <View style={styles.container}>
      {/* <CountDown
            style={styles.container}
          until={120}
          size={20}
          timeToShow={['M','S']}
        /> */}
      <Image style={{width: 400, height: 400}} source={{uri:'https://i.postimg.cc/g0DCd9Mr/Planet-500x500-Earth.png'}}/>
        <Text style={{fontSize: 50, color: '#ffffff'}}>{name}</Text>
        <Text style={{fontSize: 20, color: '#ffffff'}}>Move Away from the Sun</Text>
        <Text style={{fontSize: 50, color: '#ffffff'}}>{currentStepCount} / {distanceRoom}</Text> 
        <Text style={{fontSize: 20, color: '#ffffff'}}>steps {"\n"}</Text>
        <Text style={{fontSize: 10, color: '#ffffff'}}>{distanceActual} times the distance between the moon and the earth</Text>
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