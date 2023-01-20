// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
const CustomButton = ({onPress, text, type = "PRIMARY",bgColor,fgColor}) => {
  return (
    <Pressable 
    onPress={onPress}  
    style = {[
      styles.container,
      styles['container_${type}'],
      bgColor ? {backgroundColor: bgColor} : {}
     ]}>
      <Text 
      style= {[
        styles.text, 
        styles['text_${type}'],
        fgColor ? {color: fgColor} : {},
        ]}
        >
          
          {text}
          </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71f3',

        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    }, 

    container_PRIMARY: {
    backgroundColor: '#3B71f3'
    },

    container_SECONDARY: {
    borderColor:'#3B71f3',
    borderWidth: 2,

    },

    container_TERTIARY: {},
    text: {
      fontWeight: 'bold',
      color: 'white',
    },
    text_TERTIARY: {
      color: 'gray',
    },
    text_SECONDARY: {
      color: '#3B71f3'
    }
    });
export default CustomButton