import { createAppContainer, createStackNavigator } from 'react-navigation'

import GameMenu from '../Views/GameMenu'
import Test from '../Views/Test'
import AugmentedGame from '../Views/AugmentedGames'

const AppNavigator = createStackNavigator({
  GameMenu,
  AugmentedGame,
  Test
}, {
    initialRouteName: 'Test'
  })

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
