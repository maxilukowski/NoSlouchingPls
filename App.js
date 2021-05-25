import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import Pomodoro from './pages/Pomodoro'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Pomodoro' component={Pomodoro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
