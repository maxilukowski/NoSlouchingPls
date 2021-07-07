import React from 'react'
import { Button, View } from 'react-native'
import Slider from '@react-native-community/slider'

const TomatenSettings = ({ toggleSettings }) => {
  return (
    <View>
      <Slider
        style={{ width: 300, height: 60 }}
        minimumValue={0}
        maximumValue={5}
        minimumTrackTintColor='#000000'
        maximumTrackTintColor='#000000'
      />
      <Slider />
      <Button title='save  back' onPress={() => toggleSettings()} />
    </View>
  )
}

export default TomatenSettings
