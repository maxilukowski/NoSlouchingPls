import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Pomodoro = () => {
  return (
    <View style={styles.container}>
      <Text>Hi </Text>
    </View>
  )
}
export default Pomodoro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
