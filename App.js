import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import 'react-native-gesture-handler'
import Pomodoro from './pages/Pomodoro'
import Home from './pages/Home'
import Sound from './pages/Sound'

const Tab = createMaterialTopTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom'>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Pomodoro' component={Pomodoro} />
        <Tab.Screen name='Sound' component={Sound} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App
