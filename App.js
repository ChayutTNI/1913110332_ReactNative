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

import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const Dreawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Dreawer.Navigator
      screenOptions={{
        drawerStyle: {
          with: 240,
        },drawerActiveTintColor:"red"
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Dreawer.Screen name='Home' component={MyTab} />
      <Dreawer.Screen name='Setting' component={MyStack2} />

    </Dreawer.Navigator>
  )
}

const Stack = createNativeStackNavigator();

function MyStack1() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown:false
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
        headerShown:false
      }}
    >
      <Stack.Screen name='Setting' component={SettingScreen} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            ?'ios-information-circle'
            :'ios-information-circle-outline'
          } else if (route.name === 'Setting') {
            iconName = focused
            ?'ios-list'
            :'ios-list'
          }
          //you can any component that  here
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Setting' component={SettingScreen} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App