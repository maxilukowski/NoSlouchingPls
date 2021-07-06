import React, { useState, useRef, useEffect } from 'react'
import { View } from 'react-native'
import { Audio } from 'expo-av'
import TomatenTimerBreak from './TomatenTimerBreak'
import TomatenTimerRunning from './TomatenTimerRunning'

const TomatenTimer = () => {
  const [timeWorking, setTimeWorking] = useState({ seconds: 5, minutes: 0 })
  const [timePausing, setTimePausing] = useState({ seconds: 7, minutes: 0 })
  const [loopCounter, setLoopCounter] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  const [sound, setSound] = useState()
  const [isBreak, setIsBreak] = useState(false)
  const timerRef = useRef()
  const loopRef = useRef()

  useEffect(() => {
    minuteConverter()
    if (
      (timeWorking.seconds === 1 && timeWorking.minutes === 0) ||
      (timePausing.seconds === 1 && timePausing.minutes === 0)
    ) {
      handlePause()
      loopRef.current = setInterval(() => {
        setLoopCounter((loopCounter) => loopCounter + 1)
        playSound()
      }, 1000)
      setTimeWorking({ seconds: 5, minutes: 0 })
      setTimePausing({ seconds: 7, minutes: 0 })
      setIsBreak(!isBreak)
    }
  }, [timeWorking, timePausing])

  useEffect(() => {
    const loopAmount = 3
    if (loopCounter >= loopAmount) {
      clearInterval(loopRef.current)
      setLoopCounter(loopCounter - loopCounter)
    }
  }, [loopCounter])

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
      {!isBreak ? (
        <TomatenTimerRunning
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
          time={timeWorking}
        />
      ) : (
        <TomatenTimerBreak setIsBreak={setIsBreak} time={timePausing} setTime={setTimePausing} setSound={setSound} />
      )}
    </View>
  )

  function handleStart() {
    if (isPaused) {
      timerRef.current = setInterval(() => {
        setTimeWorking((timeWorking) => {
          return { ...timeWorking, seconds: timeWorking.seconds - 1 }
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
    setTimeWorking({ seconds: 5, minutes: 0 })
    setIsPaused(true)
  }

  function minuteConverter() {
    if (timeWorking.seconds === 1) {
      setTimeWorking({ minutes: timeWorking.minutes - 1, seconds: 60 })
    }
  }
  async function playSound() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(require('../assets/alarm.mp3'))
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }
}
export default TomatenTimer
