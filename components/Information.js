import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Information = () => {
  return (
    <View>
      <View style={styles.container}>
      <Text style = {styles.textStyle}>react native with thai-nichi</Text>
      <Text style = {{color:"blue",fontSize:15,fontWeight:"bold"}}>
        BY...Chayut Suchitvattanasuk</Text>
      <Text style = {[styles.textStyle,styles.warning]}>
        Student Id : 1913110332</Text>
      <Text>Major: Infotmation Technolgy</Text>
    </View>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#C6CFFF",
      alignItems:'Center',
      justifyContent: "Center"
    },
    textStyle:{
      fontSize:20
    },
    warning:{
      fontWeight: "bold",
      color: "red"
    }
    
  })