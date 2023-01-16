import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {

    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in")
    }

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };

    const onSignInFacebook = () => {
    console.warn('onSignInFacebookfacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInFacebookGoole');
        };
        const onSignInApple = () => {
            console.warn('onSignInApple');
            };
            const onSignUpPress = () => {
                console.warn('onSignUpPress');
            };

    return (
        <ScrollView>
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

            <CustomButton 
            text="Sign In" 
            onPress={onSignInPressed} />

            <CustomButton 
            text="Forgot Password?" 
            onPress={onForgotPasswordPressed} 
            type="TERTIARY"
             />

<CustomButton 
text="Sign In With Facebook" 
onPress={onSignInFacebook}
bgColor="#E7EAF4"
fgColor= "#4765A9"
 />
<CustomButton 
text="Sign In With Google" 
onPress={onSignInGoogle} 
bgColor="#FAE9EA"
fgColor= "#DD4D44"
/>
<CustomButton 
text="Sign In With Apple" 
onPress={onSignInApple} 
bgColor="#e3e3e3"
fgColor= "#363636"
/>

<CustomButton
text=" Don't have an account? Create one"
onPress= {onSignUpPress}
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
width:'80%',
maxWidth: 400,
maxHeight: 200,
    },
  },
);

export default SignInScreen