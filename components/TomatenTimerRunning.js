import React from 'react'
import { Button, Text, View } from 'react-native'

const TomatenTimerRunning = ({
  handleStart,
  handlePause,
  handleReset,
  time,
  isBrake,
}) => {
  return (
    <View>
      <Text>
        {time.minutes.toString().length === 1
          ? `0${time.minutes}`
          : time.minutes}
        :
        {time.seconds.toString().length === 1
          ? `0${time.seconds}`
          : time.seconds}
      </Text>
      <Button onPress={handleStart} title='start' disabled={isBrake} />
      <Button onPress={handlePause} title='pause' />
      <Button onPress={handleReset} title='reset' />
    </View>
  )
}

export default TomatenTimerRunning
