import React from 'react'
import { View, Text } from 'react-native'
import logo from '../../../assets/images/logo.png'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButtons = () => {

  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
        };
        const onSignInApple = () => {
            console.warn('onSignInApple');
            };

  return (
    <>
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

    </>
  )
}

export default SocialSignInButtons