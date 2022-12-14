import { Text, View, Button } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

const Homescreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="home" size={30} color="#008b8b" />
            <Text>Home Srcreen</Text>
            <Button
                title='เกี่ยวกับเรา'
                onPress={() => navigation.navigate('About', {
                    email: 'reactnative@tni.ac.th'
                })} />
        </View>
    );
};

export default Homescreen
