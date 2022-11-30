import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState, } from 'react'
import styles from './styles';

const TxtInput2 = () => {

    const [userName, setUserName] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Insert any text in below input</Text>
                <TextInput
                    value={userName}
                    onChangeText={(userName)=>{setUserName(userName)}}
                    placeholder={'UserName'}
                    style={styles.input}
                />
                <Text style={styles.normalText}>Thai-Nichi</Text>
                
            </View>
        </SafeAreaView>
    )
}

export default TxtInput2


