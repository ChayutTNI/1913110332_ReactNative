import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title="go to settingScreen" onPress={() => navigation.navigate('Setting')} />
    </View>
  )
}

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting</Text>
      <Button title="go to HomeScreen" onPress={() => navigation.navigate('Home')} />
    </View>
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
        tabBarInactiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name='HomeScreen' component={HomeScreen} />
      <Tab.Screen name='SettingScreen' component={SettingScreen} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  )
}

export default App