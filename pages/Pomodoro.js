import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useState } from 'react/cjs/react.development'
import TomatenSettings from '../components/TomatenSettings'
import TomatenTimer from '../components/TomatenTimer'

const Pomodoro = () => {
  const [isSettings, setIsSettings] = useState(true)
  return (
    <View style={styles.container}>
      {isSettings ? (
        <TomatenTimer toggleSettings={toggleSettings} />
      ) : (
        <TomatenSettings toggleSettings={toggleSettings} />
      )}
    </View>
  )
  function toggleSettings() {
    setIsSettings(!isSettings)
  }
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
