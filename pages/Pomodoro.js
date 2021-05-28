import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Pomodoro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Pomodoro</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
export default Pomodoro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
