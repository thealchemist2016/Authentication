import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons';
 const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const onConfirmPressed = () => {
        console.warn('onConfirmPressed');
    }

    const onSignInPress = () => {
        console.warn('onSignInPress');
    }

    const onSendPressed = () => {
        console.warn()
    }

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
            <Text style= {styles.title}>Reset your password</Text>

        <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue= {setUsername} 
               />

        <CustomButton text="Send" onPress={onSendPressed}/>

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
 