import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Information from './components/Information'
import Welcome from './components/Welcome'
import Practice1 from './components/Practice1'
import TxtInput from './components/TxtInput'
import CustomComponent from './components/CustomComponent'
import Logo from './components/Logo'
import Users from './components/Users'
import LotsOfGreeting from './components/LotsOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import TxtInput2 from './components/TxtInput2'
import UserPass from './components/UserPass'

const App = () => {
  return (
    <View>
      {/* { <Information> } */}
      {/* <Welcome /> */}
      {/* <Practice1></Practice1> */}
      {/* <TxtInput/> */}
      {/* <CustomComponent/> */}
      {/* <Logo/> */}
      {/* <Users/> */}
      {/* <LotsOfGreeting/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count num={2} title="Click"/> */}
      {/* <TxtInput2/> */}
      <UserPass/>

    </View>
  )
}

export default App

// const styles = StyleSheet.create({
//   container:{
//       flex:1,
//       justifyContent:"center",
//       alignItems:"center"
//   }
// })

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#ffffff',
  },
  input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8'
  },
});

