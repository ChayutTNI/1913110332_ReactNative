import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../components/Style';

const ThirstPage2 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>This is the Thirst Page</Text>
                <Button title='Go to First Page'
                    onPress={() => navigation.navigate('FirstPage2')} />
                <Button title='Go to Second Page'
                    onPress={() => navigation.navigate('SecondPage2')} />
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <Text style={styles.textBottomStyle}>
                    Thai-Nichi Institute of Technology
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default ThirstPage2

