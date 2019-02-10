import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import CountDown from 'react-native-countdown-component';


class PlanetView extends React.Component{
  render(){
    const { navigation, name, distanceActual, distanceRoom, currentStepCount } = this.props
    return (
        <View style={styles.container}>
      <CountDown
          until={180}
          size={20}
          timeToShow={['M','S']}
          onFinish={() => alert('Time is up! You failed to assemble on time')}
        />

        <Text style={{fontSize: 30, color: '#F5D048', fontWeight: 'bold'}}>You are</Text>
        <Image style={{width: 500, height: 247}} source={{uri:'https://i.postimg.cc/vmxpWDMn/Planet-500x500.png'}}/>
        <Text style={{fontSize: 50, color: '#F5D048', fontWeight: 'bold'}}>{name}</Text>
        <Text style={{fontSize: 20, color: '#ffffff'}}>Move Away from the Sun</Text>
        <Text style={{fontSize: 50, color: '#ffffff'}}>{currentStepCount} / {distanceRoom}</Text> 
        <Text style={{fontSize: 20, color: '#ffffff'}}>steps {"\n"}</Text>
        <Text style={{fontSize: 18, color: '#ffffff', textAlign: 'center'}}> The steps above are equivalent to {distanceActual} times the distance between the moon and the earth</Text>
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