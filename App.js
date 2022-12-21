import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Homescreen from './screens/Homescreen'
import Aboutscreen from './screens/Aboutscreen'
import HomePost from './screens/HomePost'
import CreatePost from './screens/CreatePost'
import FirstPage from './screens/FirstPage'
import SecondPage from './screens/SecondPage'
import FirstPage2 from './pages/FirstPage2'
import SecondPage2 from './pages/SecondPage2'
import ThirstPage2 from './pages/ThirstPage2'

// import { Header } from 'react-native/Libraries/NewAppScreen'

// function HomeSrceen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Srcreen</Text>
//       <Button title='เกี่ยวกับเรา'
//         onPress={()=>navigation.navigate('About')}/>
//     </View>
//   )
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008b8b'
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        {/* <Stack.Screen name='Home' component={Homescreen} />
        <Stack.Screen name='About' component={Aboutscreen} /> */}
        {/* <Stack.Screen name='HomePost' component={HomePost} />
        <Stack.Screen name='CreatePost' component={CreatePost} /> */}
        {/* <Stack.Screen name='FirstPage' component={FirstPage} />
        <Stack.Screen name='SecondPage' component={SecondPage} /> */}
        <Stack.Screen name='FirstPage2' component={FirstPage2} />
        <Stack.Screen name='SecondPage2' component={SecondPage2} />
        <Stack.Screen name='ThirstPage2' component={ThirstPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>
//         About Srcreen
//       </Text>
//     </View>
//   )
// }

export default App

