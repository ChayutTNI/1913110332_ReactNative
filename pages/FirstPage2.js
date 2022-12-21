import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../components/Style';

const FirstPage2 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>This is the First Page</Text>
                <Button title='Go to Second Page'
                    onPress={() => navigation.navigate('SecondPage2')} />
                <Button title='Go to Thirst Page'
                    onPress={() => navigation.navigate('ThirstPage2')} />
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <Text style={styles.textBottomStyle}>
                    Thai-Nichi Institute of Technology
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default FirstPage2

