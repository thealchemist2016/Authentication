import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'
import {useNavigation} from '@react-navigation/core'
 const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
 
const navigation = useNavigation();
    
    

    const onConfirmPressed = () => {
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
        placeholder="Enter your confirmation code" 
        value={code} 
        setValue= {setCode} 
               />

        <CustomButton text="Confirm" onPress={onConfirmPressed}/>
    
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
 