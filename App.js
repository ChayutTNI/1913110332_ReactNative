import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from './components/Information'
import Welcome from './components/Welcome'
import Practice1 from './components/Practice1'
import TxtInput from './components/TxtInput'
import CustomComponent from './components/CustomComponent'

const App = () => {
  return (
    <View>
      {/* { <Information> } */}
      {/* <Welcome /> */}
      {/* <Practice1></Practice1> */}
      {/* <TxtInput/> */}
      <CustomComponent/>
    </View>
  )
}

export default App

