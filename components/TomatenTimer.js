import React, { useState, useRef, useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { Audio } from 'expo-av'

const TomatenTimer = () => {
  const [time, setTime] = useState({ seconds: 0, minutes: 0 })
  const [isPaused, setIsPaused] = useState(true)
  const [sound, setSound] = useState()
  const timerRef = useRef()

  useEffect(() => {
    minuteConverter()
    if (time.seconds > 3) {
      handlePause()
      playSound()
    }
  }, [time])

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

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
      <Button onPress={handleStart} title='start' />
      <Button onPress={handlePause} title='pause' />
      <Button onPress={handleReset} title='reset' />
    </View>
  )

  function handleStart() {
    if (isPaused) {
      timerRef.current = setInterval(() => {
        setTime((time) => {
          return { ...time, seconds: time.seconds + 1 }
        })
      }, 1000)
    }
    setIsPaused(false)
  }

  function handlePause() {
    clearInterval(timerRef.current)
    setIsPaused(true)
  }

  function handleReset() {
    clearInterval(timerRef.current)
    setTime({ seconds: 0, minutes: 0 })
    setIsPaused(true)
  }

  function minuteConverter() {
    if (time.seconds === 59) {
      setTime({ minutes: time.minutes + 1, seconds: 0 })
    }
  }
  async function playSound() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/alarm.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }
}
export default TomatenTimer
