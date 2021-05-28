import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Pomodoro = () => {
  return (
    <View style={styles.container}>
      <Text>Pomodoro</Text>
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
