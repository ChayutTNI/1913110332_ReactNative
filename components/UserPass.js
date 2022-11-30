import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState, } from 'react'

const UserPass = () => {

    const [userName, setUserName] = useState("");
    const [password, setpass] = useState("");

    const checkTextInput = () => {

        //Check for the Name TextInput
        if (!userName.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        else if(!password.trim()){
            alert('Please Enter Email');
            return;
        }
        else{
            alert('Success');
        }
        //Checked Successfully
        //Do whatever you want

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    value={userName}
                    onChangeText={(userName) => { setUserName(userName) }}
                    placeholder={'UserName'}
                    style={styles.textInputStyle}
                />
                <TextInput
                    value={password}
                    onChangeText={(password) => { setpass(password) }}
                    placeholder={'Email'}
                    style={styles.textInputStyle}
                />
                <view style={{marginTop:10}}>
                    <Button title='Submit' onPress={checkTextInput}/>
                </view>
            </View>

        </SafeAreaView>
    )
}

export default UserPass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },

});

