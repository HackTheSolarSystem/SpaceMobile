import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Pedometer } from "expo";

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
        name: 'Earth',
        description: '',
        distanceRoom: 2,
        distanceActual: 5000,
        speedOfOrbitRoom: 1.2,
        speedOfOrbitActual: 5000,
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
      return (
        <View style={styles.container}>
          <Text>
            You are {this.state.celestialBody.name}
          </Text>
          <Text>
            Walk {this.state.celestialBody.distanceActual} watermelons
            <Text> ({this.state.celestialBody.distanceRoom} steps) away from the Sun.</Text>
          </Text>
        </View>
      )
    };

    if (this.state.currentStepCount > this.state.celestialBody.distanceRoom) {
      // { !this.state.distanceCheck ? this._updateDistanceCheck : null }
      return (
        <View style={styles.container}>
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
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

Expo.registerRootComponent(PedometerSensor);
