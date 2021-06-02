import { Audio } from 'expo-av'

async function playSound({ sound, setSound }) {
  console.log('Loading Sound')
  const { sound1 } = await Audio.Sound.createAsync(
    require('../assets/alarm.mp3')
  )
  setSound(sound1)

  console.log('Playing Sound')
  await sound.playAsync()
}

export default playSound
