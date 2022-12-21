import { View, Text, Button } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Go to notification' />
    </View>
  );
}

const Dreawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Dreawer.Navigator useLegacyImplementation>
        <Dreawer.Screen name='Home' component={HomeScreen} />
      </Dreawer.Navigator>
    </NavigationContainer>
  )
}

export default App