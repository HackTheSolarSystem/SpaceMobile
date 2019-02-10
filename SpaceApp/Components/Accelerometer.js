import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer, DeviceMotion } from 'expo';

export default class AccelerometerSensor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accelerometerData: {},
    }
  }

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }

  _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  }

  _fast = () => {
    Accelerometer.setUpdateInterval(16);
  }

  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData });
    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    let { x, y, z } = this.state.accelerometerData;
    const acceleration = Math.sqrt(x ** 2 + y ** 2 + z ** 2)
    let { speedOfOrbitRoom } = this.props;

    if (acceleration <= speedOfOrbitRoom + 0.2 && acceleration >= speedOfOrbitRoom - 0.1) {
      return (
        <View style={{ fontSize: 40, color: '#ffffff' }}>
          <Text>SWEET ORBIT!</Text>
        </View>
      );
    } else if (acceleration >= speedOfOrbitRoom + 0.5) {
      return (
        <View style={{ fontSize: 40, color: '#ffffff' }}>
          <Text>SLOWER!</Text>
        </View>
      )
    } else {
      return (
        <View style={{ fontSize: 40, color: '#ffffff' }}>
          <Text>FASTER!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
