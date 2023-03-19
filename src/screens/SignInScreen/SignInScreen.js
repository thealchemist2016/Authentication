import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'

const SignInScreen = () => {

    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
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