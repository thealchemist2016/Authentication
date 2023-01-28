/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {PrivateValueStore, useNavigation} from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form';

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {control, 
        handleSubmit, 
        formState:{errors}
    } = useForm();
    
    console.log(errors);
    const onSignInPressed = data => {
        console.log(data);
    //validate user
    navigation.navigate('HomeScreen');
};
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignupPress = () => {
    navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
            source={logo}
            style={[styles.logo, {height: height * 0.3}] }
            resizeMode="contain"
             />
          
            <CustomInput 
            name={'username'}
            placeholder="Username" 
            control={control}
            rules={{required: 'Username is required'}}
            />
            <CustomInput 
            name={'password'}
            placeholder="Password" 
            secureTextEntry
            control={control}
            rules={{
            required: 'Password is required', 
            minLength: {
                value: 5, 
                message:'Password should be a minimum of 5 characters long',
            },
        }}
    />
   

            <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

            <CustomButton 
            text="Forgot Password?" 
            onPress={onForgotPasswordPressed} 
            type="TERTIARY"
             />

<SocialSignInButtons />

<CustomButton
text=" Don't have an account? Create one"
onPress= {onSignupPress}
type="TERTIARY"
/>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
 root: {
    alignItems:'center',
    padding: 20,
 },
    logo: {
width:'70%',
maxWidth: 300,
maxHeight: 200,
    },
  },
);

export default SignInScreen