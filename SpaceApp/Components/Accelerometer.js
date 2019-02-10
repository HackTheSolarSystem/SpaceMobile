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

    if (acceleration <= speedOfOrbitRoom + 0.2 && acceleration >= speedOfOrbitRoom - 0.2) {
      return (
        <View style={styles.sensor}>
          <Text>SWEET ORBIT!</Text>
        </View>
      );
    } else if (acceleration < speedOfOrbitRoom - 0.25) {
      return (
        <View style={styles.sensor}>
          <Text>SPEED UP!</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.sensor}>
          <Text>SLOW DOWN!</Text>
        </View>
      )
    }
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
