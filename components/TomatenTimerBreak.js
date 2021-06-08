import React, { useEffect, useRef } from 'react'
import { Button, View, Text } from 'react-native'

const TomatenTimerBreak = ({ setIsBreak, time, setTime }) => {
  const timerRef = useRef()

  useEffect(() => {
    handleStart()
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

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
      <Button onPress={() => setIsBreak(false)} title='back' />
    </View>
  )

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTime((time) => {
        return { ...time, seconds: time.seconds + 1 }
      })
    }, 1000)
  }
}

export default TomatenTimerBreak
