import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';
const SignInScreen = () => {

    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    return (
        <View style={styles.root}>
            <Image 
            source={logo}
            style={[styles.logo, {height: height * 0.3}] }
            resizeMode="contain"
             />
             
            <CustomInput 
            placeholder="Username" 
            value={Username} 
            setValue= {setUsername} 
            />
            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue= {setPassword}
            secureTextEntry
            />

            <CustomButton />

        </View>
    );
};

const styles = StyleSheet.create({
 root: {
    alignItems:'center',
    padding: 20,
 },
    logo: {
width:'80%',
maxWidth: 400,
maxHeight: 200,
    },
  },
);

export default SignInScreen