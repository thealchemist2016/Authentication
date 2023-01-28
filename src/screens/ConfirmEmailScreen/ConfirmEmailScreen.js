// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
 import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
    const {control, handleSubmit} = useForm();
 
const navigation = useNavigation();
    
    

    const onConfirmPressed = (data) => {
        console.warn(data)
navigation.navigate('HomeScreen');
    };
    const onSignInPress = () => {
    navigation.navigate('SignIn')
    };
    const onResendPressed = () => {
            console.warn('onResendPressed')
            };

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <Text style= {styles.title}>Confirm your email</Text>

        <CustomInput 
        name="code"
        control={control}
        placeholder="Enter your confirmation code" 
        rules={{
            required: 'Confirmation code is required'
        }}
    />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
    
        <CustomButton
    text="Resend code"
    onPress={onResendPressed}
    type="SECONDARY"
    />

    <CustomButton
    text="Back to Sign In"
    onPress={onSignInPress}
    type="TERTIARY"
    />
    </View>
    </ScrollView> 
        );
 };

 const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    }
 })

 export default ConfirmEmailScreen;
 