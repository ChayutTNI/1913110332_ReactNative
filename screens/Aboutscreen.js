import { Text, View } from 'react-native'
import React from 'react'

const Aboutscreen = ({ route }) => {

    const { email } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About Srcreen</Text>
            <Text>Email : {email}</Text>
        </View>
    );
};

export default Aboutscreen;