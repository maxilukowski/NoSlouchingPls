import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Pomodoro Plx"
        onPress={() => navigation.navigate('Pomodoro')}
      />
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})