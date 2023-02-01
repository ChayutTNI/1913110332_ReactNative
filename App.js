import { View, Text, Button,Image } from 'react-native'
import React from 'react'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import DetailScreen from './screens/DetailScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close Drawer" onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6666FF'
        },
        headerTinColor: '#ffffff',
        headerTitleStyle: {
          fonWeight: 'bold'
        }
      }}>
      <Stack.Screen name='Product' component={ProductScreen} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          with: 240,
        }, drawerActiveTintColor: "red"
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={MyStack1} />
      <Drawer.Screen name='Product' component={MyStack2} />
      {/* <Dreawer.Screen name='Detail' component={MyStack3} /> */}

    </Drawer.Navigator>
  )
}

function MyStack1() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}

function MyStack2() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='ProductScreen' component={ProductStack} />
    </Stack.Navigator>
  )
}

function MyStack3() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='DetailScreen' component={DetailScreen} />
    </Stack.Navigator>
  )
}



const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App