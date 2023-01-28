// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SocialSignInButtons from '../../components/SocialSignInButtons';
 import {useNavigation} from '@react-navigation/core';
 import {useForm} from 'react-hook-form'


const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSendPressed = (data) => {
        console.warn(data)
    navigation.navigate('NewPassword');
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <Text style= {styles.title}>Reset your password</Text>

        <CustomInput 
        name="username"
        control={control}
        placeholder="Username"
        rules={{
            required: 'Username is required'
        }} 
     />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)}/>

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

 export default ForgotPasswordScreen;
 