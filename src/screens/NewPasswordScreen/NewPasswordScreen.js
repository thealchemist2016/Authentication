// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const NewPasswordScreen = () => {
    const {control, handleSubmit} = useForm();
 
    const navigation = useNavigation();
  
    const onSubmitPressed = (data) => {
        console.warn(data)
    navigation.navigate('HomeScreen')
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn')

    };


        return (
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <Text style= {styles.title}>Reset your password</Text>

        <CustomInput 
        placeholder="Code"
        name="code"
        control={control}
        rules= {{required: "Code is required"}}
         
        
               />

        <CustomInput 
        placeholder="Enter your new password"
        name="password"
        control={control}
        secureTextEntry
        rules={{
        required:'Password is required',
        minLength: {
        value: 8,
        message: 'Password should be at least 8 characters long',
        },
    }}
    />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)}/>

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

 export default NewPasswordScreen;
 