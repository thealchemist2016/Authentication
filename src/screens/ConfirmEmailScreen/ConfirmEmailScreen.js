import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'

 const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    /* const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
*/
    const onConfirmPressed = () => {
    console.warn('onConfirmPressed')
    };
    const onSignInPress = () => {
    console.warn('onSIgnInPress')
    };
    const onResendPressed = () => {
            console.warn('onResendPressed')
            };

        return (

            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
               <Text style= {styles.title}>Confirm your email</Text>

               <CustomInput 
               placeholder="Enter your confirmation code" 
               value={code} 
               setValue= {setCode} 
               />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />
    
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
 