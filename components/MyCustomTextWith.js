import { View, Text } from 'react-native'
import React from 'react'

const Nametext = ({Fname,Lname})=>{
    return(
        <View style={{alignItems:'center'}}>
            <text style={{color:'red',fontSize:10}}>First name is {Fname} and Last name is {Lname}</text>
        </View>
    );
}

const MyCustomTextWith = () => {
  return (
    <View style={{flex:1,alignItems:'center',top:50}}>
      <Nametext Fname ="Chayut" Lname="Suchitvattanasuk"/>
      <Nametext Fname ="Chayut2" Lname="Suchitvattanasuk2"/>
    </View>
  )
}

export default MyCustomTextWith