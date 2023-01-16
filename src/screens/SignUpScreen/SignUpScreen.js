import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';

const SignUpScreen = () => {

    const [Username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn('Sign in')
    }

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
            const onTermsOfUsePressed= () => {
        console.warn('onTermsOfUsePressed')
            };
            const onPrivacyPressed= () => {
                console.warn('onPrivacyPressed');
                    };

    return (
        <ScrollView>
        <View style={styles.root}>
           <Text style= {styles.title}>Create an account</Text>
             
            <CustomInput 
            placeholder="Username" 
            value={Username} 
            setValue= {setUsername} 
            />
             <CustomInput placeholder="Email" 
             value={email} 
             setValue= {setEmail} 
            />
            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue= {setPassword}
            secureTextEntry
            />
             <CustomInput 
            placeholder="Repeat Password" 
            value={passwordRepeat} 
            setValue= {setPasswordRepeat}
            secureTextEntry
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />
<Text style={styles.text}>
    By registering, you confirm that you accept our {' '}
    <Text styles={styles.link}> onPress={onTermsOfUsePressed} Terms of Use </Text> and {' '}
    <Text styles={styles.link}> onPress={onPrivacyPressed} Privacy Policy</Text>
    </Text>
            <CustomButton 
            text="Sign In" 
            onPress={onSignInPressed} />

           

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
    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB079'
    },
  },
);

export default SignUpScreen