import { View, Text, Button } from 'react-native'
import React from 'react'

const SettingScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{padding:20}}>Setting Screen</Text>
      <Button title='Go to Home' onPress={()=> navigation.navigate('HomeScreen')}/>
    </View>
  )
}

export default SettingScreen