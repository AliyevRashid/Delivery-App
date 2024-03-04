import { useState, React } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { users, categories } from '../UserData/data.js';

const Login = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const submitLogin = () => {
        const user = users.find(u => u.email === email);
        if (user) {
            navigation.navigate("Categories");
        }
        console.log(user);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Delivery-App</Text>
            </View>

            <View style={styles.inputDataContainer}>
                <View style={styles.emailContainer}>
                    <Text style={styles.inputNameStyle}>Email</Text>
                    <TextInput
                        onChangeText={(text) => setEmail(text)} 
                        style={styles.textInput}
                        placeholder='Your Email'
                        value={email}
                    />
                </View>
                <View style={styles.passwordContainer}>
                    <Text style={styles.inputNameStyle}>Password</Text>
                    <TextInput
                        onChangeText={(text) => setPassword(text)} 
                        secureTextEntry
                        style={styles.textInput}
                        placeholder='Your Password'
                        value={password}
                    />
                </View>
                <Pressable style={styles.submitButton} onPress={submitLogin}>
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        height: '95%',
        width: '95%'
    },
    titleContainer: {
        height: '100%',
        width: '50%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 36,
        fontWeight: '900',
        color: 'pink',
        marginHorizontal: 25
    },
    inputDataContainer: {
        backgroundColor: 'green',
        borderWidth: '0.02%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '50%'
    },
    textInput: {
        borderRadius: 25,
        fontSize: 16,
        marginVertical: '5%',
        shadowRadius: 25,
        shadowColor: 'white',
        borderColor: 'pink',
        borderWidth: 3,
        backgroundColor: 'white',
        paddingHorizontal: '4%'
    },

    inputNameStyle: {
        marginVertical: '5%'
    },
    submitButton: {
        borderRadius: 10,
        backgroundColor: 'blue',
        marginHorizontal: '5%',
        marginVertical: '10%',
        paddingVertical: '2%',
        width: '25%'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Login;
