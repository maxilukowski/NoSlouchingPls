import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Audio } from 'expo-av'

const Sound = () => {
  const [sound, setSound] = useState()

  async function playSound() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/alarm.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View style={styles.container}>
      <Button title='Play Sound' onPress={playSound} />
    </View>
  )
}
export default Sound

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
