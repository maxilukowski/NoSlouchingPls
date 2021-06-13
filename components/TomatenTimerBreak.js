import React, { useEffect, useRef } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

const TomatenTimerBreak = ({ setIsBreak, time, setTime }) => {
  const timerRef = useRef()

  useEffect(() => {
    handleStart()
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

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
        <Button onPress={() => setIsBreak(false)} title='back' />
      </View>
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
  },
  timer: {
    fontSize: 30,
  },
})
