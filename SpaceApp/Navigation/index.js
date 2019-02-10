import { createAppContainer, createStackNavigator } from 'react-navigation'

import GameMenu from '../Views/GameMenu'
import Test from '../Views/Test'
import PlanetView from '../Views/PlanetView'
import AugmentedGame from '../Views/AugmentedGame'

const AppNavigator = createStackNavigator({
  GameMenu,
  Test,
  PlanetView,
  AugmentedGame
}, {
    initialRouteName: 'Test'
  })

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
