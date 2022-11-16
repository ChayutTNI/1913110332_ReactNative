import { StyleSheet} from 'react-native'
import React from 'react'

const style = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    warning:{
        color:'red',
        fontSize:20
    },
    normalText:{
        fontSize:15,
        color:'blue'
    }

});

export default style