import { createAppContainer, createStackNavigator } from 'react-navigation'

import GameMenu from '../Views/GameMenu'
import Test from '../Views/Test'
import PlanetView from '../Views/PlanetView'

const AppNavigator = createStackNavigator({
  GameMenu,
  Test,
  PlanetView
}, {
  initialRouteName: 'GameMenu'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer