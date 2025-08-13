import React from 'react';
import {useState} from 'react';

import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';

import CustomButton from '../components/CustomButton.js';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.root_container}>
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>Acesse</Text>
                    <Text style={styles.subtitle}>com E-mail e senha</Text>
                </View>

                <Text style={styles.input_label}>E-mail</Text>
                <TextInput style={styles.text_input} placeholder="Digite seu E-mail"></TextInput>
                <Text style={styles.input_label}>Senha</Text>
                <TextInput style={styles.text_input} placeholder="Digite sua Senha"></TextInput>

                <View style={styles.login_options}>]
                    <View style={styles.remember_me}>
                        <Checkbox style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#14c871' : undefined}
                        />
                        <Text style={styles.input_label}>Lembrar senha</Text>
                    </View>
                    <Text style={styles.input_label}>Esqueci minha senha</Text>
                </View>

                <View style={styles.button_container}>
                    <CustomButton text="Acessar" container_style={styles.login_button} text_style={styles.login_button_text}></CustomButton>
                    <CustomButton text="Cadastro" container_style={styles.register_button} text_style={styles.register_button_text}></CustomButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    container: {
        marginTop: 80 ,
        flexDirection: 'column',
//        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor: '#f0f8ff',    
    },
    title_container: {
        paddingBottom: 40
    },
    login_options: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#ff0000"
    },
    text_input: {
        backgroundColor: '#e3e7f3',
        width: windowWidth*0.85,
        height: 65,
        borderRadius: 5,
        marginBottom: 15,
        padding: 10,

        fontWeight: 500,
    },
    remember_me: {
        flex: 1,
        flexDirection: 'row',
        gap: 10
    },
    input_label: {
        fontWeight: 500,
        fontSize: 12
    },
    title: {
        fontSize: 40,
        fontWeight: 500
    },
    subtitle: {
        fontWeight: 500
    },
    button_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,
        width: 0.85*windowWidth,
    },
    login_button: {
        backgroundColor: '#14c871',
        width: windowWidth*0.40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally
        flex:1
    },
    register_button: {
        borderWidth: 1,
        width: 0.40*windowWidth,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally
        flex:1
    }
})