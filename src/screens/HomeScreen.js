import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

import CustomButton from '../components/CustomButton.js';


const windowWidth = Dimensions.get('window').width;


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ótimo Dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>
            <CustomButton text="Como deseja acessar?" container_style={styles.oauthButtonContainer} text_style={styles.buttonText} onPress={() => navigation.navigate('Home')} />
            <CustomButton text="Outras Opção" container_style={styles.buttonContainer} text_style={styles.buttonText} onPress={() => navigation.navigate('Home')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 40,
        marginBottom: 0,
        fontWeight: '600'
    },
    subtitle: {
        marginBottom: 60
    },  
    oauthButtonContainer: {
        backgroundColor: '#14c871',
        margin: 5,
        width: windowWidth*0.85,
        borderRadius: 5,
        paddingTop: 8,
        paddingBottom: 8
    },
    buttonContainer: {
        backgroundColor: '#fff',
        margin: 5,
        width: windowWidth*0.85,
        borderColor: "#14c871",
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 8,
        paddingBottom: 8
    },
    buttonText: {
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: '400'
    },
})