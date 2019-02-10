import { createAppContainer, createStackNavigator } from 'react-navigation'

import GameMenu from '../Views/GameMenu'
import GameLogic from '../Views/GameLogic'
import PlanetView from '../Views/PlanetView'
import AugmentedGame from '../Views/AugmentedGame'
import HowToPlay from '../Views/HowToPlay'
import Counter from '../Views/Counter'

const AppNavigator = createStackNavigator({
  GameMenu,
  GameLogic,
  PlanetView,
  AugmentedGame,
  HowToPlay,
  Counter
}, {
    initialRouteName: 'GameMenu'
  })

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
