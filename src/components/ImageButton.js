import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Pressable, Image} from 'react-native';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width; 

const CustomButton = ({container_style, icon, icon_style, onPress}) => {
    return (
        <Pressable style={container_style} onPress={onPress}>                
                <Image source={icon} style={icon_style}/>
        </Pressable>
    );
}

export default CustomButton;