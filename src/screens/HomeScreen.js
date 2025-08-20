import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, Pressable  } from 'react-native';

import CustomButton from '../components/CustomButton.js';

const windowWidth = Dimensions.get('window').width;


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../image_assets/casual_dog.png')} style={styles.image} resizeMode='contain'/>
            <Text style={styles.title}>Ótimo Dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>
            
            <Pressable style={styles.oauthButtonContainer}>
                
                <Image source={require('../image_assets/Google.png')} style={styles.oauthLogo}></Image>
                
                <Text style={styles.buttonText} >Como deseja acessar?</Text>

                <Image source={require('../image_assets/Google.png')} style={styles.oauthLogoBlank}></Image>
            </Pressable>

            <CustomButton text="Outras Opção" container_style={styles.buttonContainer} text_style={styles.otherOptionsButtonText} onPress={() => navigation.navigate('Login')} />

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
        paddingBottom: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
        
    },
    oauthLogo: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 4,
        color: 'white',
    },
    oauthLogoBlank: {
        width: 30,
        height: 30,
        opacity: 0.0
    },
    buttonText: {
        width: windowWidth*0.50,
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: '400',
        color: 'white',
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
    otherOptionsButtonText: {
        color: '#2e3e4b',
        fontWeight: '500',
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
    },  
    image: {
        padding: 50,
        width: windowWidth*0.9
    },
})