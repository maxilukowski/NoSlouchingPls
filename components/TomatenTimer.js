import React, { useState, useRef } from 'react'
import { Button, Text, View } from 'react-native'

const TomatenTimer = () => {
  const [timer, setTimer] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  const countRef = useRef()
  return (
    <View>
      <Text>{timer}</Text>
      <Button onPress={handleStart} title='start' />
      <Button onPress={handlePause} title='pause' />
      <Button onPress={handleReset} title='reset' />
    </View>
  )
  function handleStart() {
    if (isPaused) {
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    }
    setIsPaused(false)
  }

  function handlePause() {
    clearInterval(countRef.current)
    setIsPaused(true)
  }

  function handleReset() {
    clearInterval(countRef.current)
    setTimer(0)
    setIsPaused(true)
  }
}
export default TomatenTimer
