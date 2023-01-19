import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
const SignUpScreen = () => {

    const [Username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn('onRegisterPressed');
    };

   
            const onSignInPress = () => {
                console.warn('onSignInPress');
            };
            const onTermsOfUsePressed= () => {
        console.warn('onTermsOfUsePressed');
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
    <Text style={styles.link}> onPress={onTermsOfUsePressed} Terms of Use </Text> and {' '}
    <Text style={styles.link}> onPress={onPrivacyPressed} Privacy Policy</Text>
    </Text>


    <SocialSignInButtons />


            <CustomButton 
            text="Have an account? Sign In" 
            onPress={onSignInPress}
            type='TERTIARY'
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
        color: '#FDB075'
    },
  },
);

export default SignUpScreen