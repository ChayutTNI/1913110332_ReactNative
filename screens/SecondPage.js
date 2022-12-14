import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const SecondPage = ({ route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.heading}>Thai-Nichi Institute of</Text>
                <Text style={styles.heading}>Technology</Text>
                <Text style={styles.textStyle}>Values passed from First page : {route.params?.post}</Text>
            </View>
            <view style={{justifyContent:'flex-end'}}>
                <Text>www.tni.ac.th</Text>
            </view>
        </SafeAreaView>

    )
}

export default SecondPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
});