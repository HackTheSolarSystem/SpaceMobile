import * as React from 'react';
import { View, StyleSheet, Text, Button, Platform, Image } from 'react-native';
import { Pedometer } from "expo";
import Torch from 'react-native-torch';

import PlanetView from './PlanetView';
import Accelerometer from '../Components/Accelerometer';

export default class PedometerSensor extends React.Component {
  constructor() {
    super()
    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      currentStepCount: 0,
      activeGame: false,
      celestialBody: {
        name: 'The Sun',
        description: '',
        distanceRoom: 2,
        distanceActual: 5000,
        speedOfOrbitRoom: 1.2,
        speedOfOrbitActual: 5000,
      },
      distanceCheck: false,
      speedCheck: false,
      gameStatus: true,
    };
  }

  componentDidMount() {
    this._subscribe();
    this.setState({ currentStepCount: 0 })
  }

  componentWillUnmount() {
    this._unsubscribe();
    this.setState({ currentStepCount: 0 })
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  // _updateDistanceCheck = () => {
  //   // if (!this.state.distanceCheck) {
  //   this.setState({ distanceCheck: true })
  //   console.log(this.state.distanceCheck)
  //   // }
  // }

  triggerBlackhole = () => {
    this.setState({ currentStepCount: 0, distanceCheck: false, gameStatus: false })
  }

  endGame = () => {
    this.setState({ gameStatus: false })
  }

  render() {
    if (!Pedometer.isAvailableAsync()) {
      return (
        <View style={styles.container}>
          {this.state.isPedometerAvailable}
        </View>
      )
    };

    // if (!this.state.gameStatus) {
    //   return (
    //     <View style={styles.container}>
    //       <Text style={{ color: 'white' }}>GAME OVER</Text>
    //     </View>
    //   )
    // }

    if (this.state.celestialBody.name === 'The Sun') {
      const uri = !this.state.gameStatus ? require('../assets/blackhole.png') : require('../assets/sun.png')

      // Torch.switchState(true);

      return (
        <View style={styles.container}>
          <Image style={{ width: 400, height: 400 }} source={uri} />

          <Button title='COLLAPSE INTO BLACK HOLE' onPress={this.triggerBlackhole} style={styles.button} />
          {/* <Button title='END GAME' onPress={this.endGame} style={styles.button} /> */}

        </View>
      )
    }

    if (this.state.currentStepCount <= 1) {
      const { name, distanceActual, distanceRoom } = this.state.celestialBody;
      const { currentStepCount } = this.state;
      return (
        <View style={styles.container}>
          <PlanetView name={name} distanceActual={distanceActual} distanceRoom={distanceRoom} currentStepCount={currentStepCount} />
        </View>
      )
    };

    if (this.state.currentStepCount > this.state.celestialBody.distanceRoom) {
      // { !this.state.distanceCheck ? this._updateDistanceCheck : null }
      return (
        <View style={styles.container}>
          {/*NEEDS VIEW FOR SPEEDING UP SLOWING DOWN*/}
          <Text style={{ fontSize: 50, color: '#ffffff' }}>
            Begin orbiting
          </Text>
          <Image style={{ width: 400, height: 400 }} source={{ uri: 'https://i.postimg.cc/g0DCd9Mr/Planet-500x500-Earth.png' }} />
          <Accelerometer speedOfOrbitRoom={this.state.celestialBody.speedOfOrbitRoom} />
        </View>
      )
    };

    return (
      <View style={styles.container}>
        <Text>
          You are {this.state.celestialBody.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    margin: 5,
  }
});

Expo.registerRootComponent(PedometerSensor);
