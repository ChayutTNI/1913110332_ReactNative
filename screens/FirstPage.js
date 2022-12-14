import { StyleSheet, View, Text, Button, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const FirstPage = ({ navigation }) => {

    const [postText, setPosetText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <text style={styles.heading}>Thai-Nichi Institute of</text>
                <Text style={styles.heading}>Technology</Text>
                <Text style={styles.textStyle}>Pless input your name to pass it to second screen</Text>
                <TextInput
                    style={{ height: 30, padding: 10, backgroundColor: 'white' }}
                    value={postText}
                    onChangeText={setPosetText}
                />
                <view style={{ padding: 10 }}></view>
                <Button title='Go Next'
                    onPress={() => navigation.navigate('SecondPage', { post: postText })} />
            </View>
            <view style={{justifyContent:'flex-end'}}>
                <Text >www.tni.ac.th</Text>
            </view>
        </SafeAreaView>
    )
}

export default FirstPage

export const styles = StyleSheet.create({
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