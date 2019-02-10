import { createAppContainer, createStackNavigator } from 'react-navigation'

import GameMenu from '../Views/GameMenu'
import GameLogic from '../Views/GameLogic'
import PlanetView from '../Views/PlanetView'
import AugmentedGame from '../Views/AugmentedGame'

const AppNavigator = createStackNavigator({
  GameMenu,
  GameLogic,
  PlanetView,
  AugmentedGame
}, {
    initialRouteName: 'GameLogic'
  })

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
