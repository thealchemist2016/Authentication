import React from "react"
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import logo from '../../../assets/images/logo.png'

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
    )
}

const styles = StyleSheet.create({
 root: {
    alignItems:'center',
    padding: 20,
 },
    logo: {
width:'80%',
maxWidth: 300,
height: 200,
    },
  },
);

export default SignInScreen