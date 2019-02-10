import { createAppContainer, createStackNavigator } from 'react-navigation'

import GameMenu from '../Views/GameMenu'
import Test from '../Views/Test'

const AppNavigator = createStackNavigator({
  GameMenu,
  Test
}, {
  initialRouteName: 'GameMenu'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer