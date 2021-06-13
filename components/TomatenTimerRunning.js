import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const TomatenTimerRunning = ({
  handleStart,
  handlePause,
  handleReset,
  time,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {time.minutes.toString().length === 1
          ? `0${time.minutes}`
          : time.minutes}
        :
        {time.seconds.toString().length === 1
          ? `0${time.seconds}`
          : time.seconds}
      </Text>
      <View style={styles.buttons}>
        <Button onPress={handleStart} title='start' />
        <Button onPress={handlePause} title='pause' />
        <Button onPress={handleReset} title='reset' />
      </View>
    </View>
  )
}

export default TomatenTimerRunning

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttons: {
    marginTop: 30,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around',
  },
  timer: {
    fontSize: 30,
  },
})
