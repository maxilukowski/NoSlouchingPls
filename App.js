import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
//import 'react-native-gesture-handler'
import Pomodoro from './pages/Pomodoro'
import Home from './pages/Home'

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Pomodoro' component={Pomodoro} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}
export default App
