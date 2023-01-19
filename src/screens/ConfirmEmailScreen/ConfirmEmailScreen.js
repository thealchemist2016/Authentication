const { ScrollView } = require("react-native");

const onSignInPress = () => {
    console.warn('onSignInPress');
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
               <Text style= {styles.title}>Confirm your email</Text>
                 
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
                </ScrollView>
                </View>
        )      