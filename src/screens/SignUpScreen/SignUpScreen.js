// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';
import {View, 
    Text,  
    StyleSheet, 
    ScrollView} 
    from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core'
import {useForm} from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
    };
    const onSignInPress = () => {
        navigation.navigate('SignIn')

    };
    const onTermsOfUsePressed= () => {
            console.warn('onTermsOfUsePressed');
            };
    const onPrivacyPressed= () => {
            console.warn('onPrivacyPressed');
                    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
           <Text style= {styles.title}>Create an account</Text>
             
            <CustomInput 
            name="username"
            control={control}
            placeholder="Username" 
           
            />
             <CustomInput 
             name="email"
             control={control}
             placeholder="Email" 
             
            />
            <CustomInput 
            name="password"
            control={control}
            placeholder="Password" 
            secureTextEntry
            rules={{
                required: 'Password is required',
                minLength: {
                    value: 8,
                    message: 'Password should be at least 8 characters long'
                },
            }}
            />
             <CustomInput
             name="password-repeat"
             control={control} 
            placeholder="Repeat Password" 
            secureTextEntry
            rules={{
                validate: value =>
                value === pwd || 'Passwords do not match',
            }}
            />

            <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />

<Text style={styles.text}>
    By registering, you confirm that you accept our{' '} 
    <Text style={styles.link}> onPress={onTermsOfUsePressed}
    Terms of Use 
    </Text>{' '} 
    and {' '}
    <Text style={styles.link}> onPress={onPrivacyPressed}
    Privacy Policy 
    </Text>
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