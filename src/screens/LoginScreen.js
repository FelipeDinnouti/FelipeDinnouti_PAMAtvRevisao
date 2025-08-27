import React from 'react';
import { useState } from 'react';

import { View, Text, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from "@expo/vector-icons"; // Eye icon

import CustomButton from '../components/CustomButton.js';
import ImageButton from '../components/ImageButton.js';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={styles.root_container}>
            <View style={styles.container}>
                <Pressable  onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#14c871" />
                </Pressable > 
                <View style={styles.title_container}>
                    <Text style={styles.title}>Acesse</Text>
                    <Text style={styles.subtitle}>com E-mail e senha</Text>
                </View>

                <Text style={styles.input_label}>E-mail</Text>
                <TextInput style={styles.text_input} placeholder="Digite seu E-mail"></TextInput>
                <Text style={styles.input_label}>Senha</Text>
                <View style={styles.password_container}>
                    <TextInput
                        style={styles.password_text}
                        placeholder="Digite sua senha"
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Pressable
                        style={styles.password_icon}
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        <Ionicons
                            name={isPasswordVisible ? "eye-off" : "eye"}
                            size={22}
                            color="gray"
                        />
                    </Pressable>
                </View>

                <View style={styles.login_options}>
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

                <View style={styles.window_divider}>
                    <View style={styles.ruler}></View>
                    <Text>Ou contine com</Text>
                    <View style={styles.ruler}></View>
                </View>

                <View style={styles.alternative_login_options}>
                    <ImageButton icon={require('../image_assets/Google.png')} container_style={styles.login_option} />
                    <ImageButton icon={require('../image_assets/Facebook.png')} container_style={styles.login_option} />
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
        marginTop: 80,
        flexDirection: 'column',
        //        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor: '#f0f8ff',
    },
    title_container: {
        paddingBottom: 40
    },
    login_options: {
        marginTop: 30,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    checkbox: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#14c871",
    },
    text_input: {
        backgroundColor: '#e3e7f3',
        width: windowWidth * 0.85,
        height: 65,
        borderRadius: 5,
        marginBottom: 15,
        padding: 10,

        fontWeight: 500,
    },
    password_container: {
        backgroundColor: '#e3e7f3',
        width: windowWidth * 0.85,
        height: 65,
        borderRadius: 5,
        marginBottom: 15,
        padding: 10,

        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    password_text: {
        flex: 1, // takes all available space
        paddingVertical: 10,
    },
    password_icon: {
        padding: 6,
    },

    remember_me: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
    },
    input_label: {
        fontWeight: 500,
        fontSize: 12
    },
    title: {
        color: '#2e3e4b',
        fontSize: 40,
        fontWeight: 500
    },
    subtitle: {
        color: '#2e3e4b',
        fontWeight: 500
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,
        width: 0.85 * windowWidth,
    },
    login_button: {
        backgroundColor: '#14c871',
        width: windowWidth * 0.40,
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally
        flex: 1
    },
    login_button_text: {
        color: 'white'
    },
    register_button: {
        borderWidth: 1,
        borderColor: '#2e3e4b',
        width: 0.40 * windowWidth,
        height: 60,
        borderRadius: 5,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally
        flex: 1
    },
    register_button_text: {
        color: '#2e3e4b',
        fontWeight: '500'
    },
    window_divider: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ruler: {
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth, // Device aware 1px
        marginVertical: 10,
        flex: 1,
        marginHorizontal: 10,
    },
    alternative_login_options: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        width: 0.85 * windowWidth,
        marginBottom: 80
    },
    login_option: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 10
    }
})