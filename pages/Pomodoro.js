import React from 'react'
import { View, StyleSheet } from 'react-native'
import TomatenTimer from '../components/TomatenTimer'

const Pomodoro = () => {
  return (
    <View style={styles.container}>
      <TomatenTimer />
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
