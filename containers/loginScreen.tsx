import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const loginScreen = () => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {

        auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })
    }, [])


    // Register Function Start 

    const register = async event => {

        event.preventDefault();
        // Firebase Code

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user);
            alert('Account created Successfully')
            navigation.navigate("Home")



        }
        catch (error) {
            alert(error.message);
        }
    }

    // Register Function End

    // Login Function Start 

    const logIn = async event => {

        event.preventDefault();
        // Firebase Code

        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user);
            navigation.navigate("Home")

        }
        catch (error) {
            alert(error.message);
            setEmail("");
            setPassword("");
        }
    }

    // Login Function End 

    return (

        <KeyboardAvoidingView style={styles.container} behavior="padding">

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>


            <View style={styles.buttonContainer}>

                <TouchableOpacity onPress={logIn} style={[styles.button]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={register}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>

                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView >

    );
};

export default loginScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {

    },
    buttonText: {

    },
    inputContainer: {
        width: "80%",

    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    button: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },

    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },

    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#0782F9",
        borderWidth: 2,
    },

    buttonText: {
        color: "white",
        fontWeight: 700,
        fontSize: 16,
    },

    buttonOutlineText: {
        color: "#0782F9",
        fontWeight: 700,
        fontSize: 16,
    },
});
