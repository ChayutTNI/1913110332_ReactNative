import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name})=>{
    // const {name}= props; 
    return(
        <View style={{alignItems:'center'}}>
            <text style={{color:'red',fontSize:20}}>Hello : {name}</text>
        </View>
    );
}

const LotsOfGreeting = () => {
  return (
    <View style={{flex:1,alignItems:'center',top:50}}>
      <Greeting name ="Marry Chrismas"/>
      <Greeting name ="Happy new year"/>
    </View>
  )
}

export default LotsOfGreeting





