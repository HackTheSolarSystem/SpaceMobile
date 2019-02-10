import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Pedometer } from "expo";

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
        name: 'Saturn',
        description: 'Saturn has 62 moons',
        distanceRoom: 15,
        distanceActual: 3713,
        speedOfOrbitRoom: 0.6,
        speedOfOrbitActual: 40,
      },
      distanceCheck: false,
      speedCheck: false,
    };
  }

  componentDidMount() {
    this._subscribe();
    this.setState({ currentStepCount: 0 })
  }

  componentWillUnmount() {
    this._unsubscribe();
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

  render() {
    if (!Pedometer.isAvailableAsync()) {
      return (
        <View style={styles.container}>
          {this.state.isPedometerAvailable}
        </View>
      )
    };

    if (this.state.currentStepCount <= 1) {
      const {name, distanceActual, distanceRoom} = this.state.celestialBody;
      const {currentStepCount} = this.state;
      return (
        <View style={styles.container}>
          <PlanetView name={name} distanceActual={distanceActual} distanceRoom={distanceRoom} currentStepCount={currentStepCount}/>
          {/* <Text>
            You are {this.state.celestialBody.name}
          </Text> */}
          {/* <Text>
            Walk {this.state.celestialBody.distanceActual} watermelons
            <Text> ({this.state.celestialBody.distanceRoom} steps) away from the Sun.</Text>
          </Text> */}
        </View>
      )
    };

    if (this.state.currentStepCount > this.state.celestialBody.distanceRoom) {
      // { !this.state.distanceCheck ? this._updateDistanceCheck : null }
      return (
        <View style={styles.container}>
        {/*NEEDS VIEW FOR SPEEDING UP SLOWING DOWN*/}
          <Text>
            Begin orbiting
          </Text>
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
    alignItems: "center",
    justifyContent: "center"
  }
});

Expo.registerRootComponent(PedometerSensor);
