import { View, Text, Button } from 'react-native'
import React from 'react'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstPage2 from './pages/FirstPage2'
import SecondPage2 from './pages/SecondPage2'
import ThirstPage2 from './pages/ThirstPage2'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title='Go to notification' />
//     </View>
//   );
// }

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title='Open Drawer'
        onPress={() => navigation.openDrawer()} />
      <Button title='Toggle Drawer'
        onPress={() => navigation.toggleDrawer()} />
    </View>
  )
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  )
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')}/>
      <DrawerItem label="Close Drawer" onPress={() => props.navigation.closeDrawer()}/>
      <DrawerItem label="toggle Drawer" onPress={() => props.navigation.toggleDrawer()}/> */}
    </DrawerContentScrollView>
  )
}

const Dreawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Dreawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#b0e0e6',
          with: 240
        }
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* <Dreawer.Screen name='Feed' component={Feed} />
      <Dreawer.Screen name='Article' component={Article} /> */}
      <Dreawer.Screen name='FirstPage2' component={MyStack1} />
      <Dreawer.Screen name='SecondPage2' component={MyStack2} />

    </Dreawer.Navigator>
  )
}

const Stack = createNativeStackNavigator();

function MyStack1() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name='FirstPage2' component={FirstPage2} />
    </Stack.Navigator>
  )
}

function MyStack2() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name='SecondPage2' component={SecondPage2} />
      <Stack.Screen name='ThirstPage2' component={ThirstPage2} />
    </Stack.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      {/* <Dreawer.Navigator useLegacyImplementation>
        <Dreawer.Screen name='Home' component={HomeScreen} />
      </Dreawer.Navigator> */}
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App