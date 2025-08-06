import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    }
})