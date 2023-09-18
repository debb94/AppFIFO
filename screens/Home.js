import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BoldTextInputIcon from "../components/atoms/BoldTextInputIcon";
import BoldButton from "../components/atoms/BoldButton";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home({navigation}){

    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");

    return(
        <SafeAreaView>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Baxter</Text>
                <Text style={styles.subtitle}>Control de inventario FIFO</Text>
                <BoldTextInputIcon 
                    value={user} 
                    setValue={setUser} 
                    placeholder="Usuario" 
                    icon="account-circle-outline"
                    type="text">
                </BoldTextInputIcon>
                <BoldTextInputIcon
                    value={password}
                    setValue={setPassword}
                    placeholder="Contraseña"
                    icon="lock-outline"
                    type="password">
                </BoldTextInputIcon>
                <BoldButton onPress={()=>{navigation.navigate("ReadMode")}} title="Iniciar Sesión"/>
                <Pressable onPress={()=>{navigation.navigate("Scanner")}}>
                    <Text style={styles.link}>Olvido su contraseña</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#090774',
        height: height
    },
    title:{
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#ffffff',
        fontSize: 60,
        marginBottom: 60
    },
    subtitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 50,
        width: width * 0.7,
        textAlign: 'center'
    },
    btnLogin: {
        width: width * 0.8,
        height: 60,
        textAlign: "center",
        borderRadius: 30,
        backgroundColor: '#ffffff',
        display: "flex",
        alignItems: 'center',
        justifyContent: "center"
    },
    btnLoginText:{
        fontSize: 18,
        fontWeight: "bold",
        color: '#1f1c6d',
        textDecorationLine: "underline"
    },
    link:{
        margin: 10,
        color: '#ffffff',
    }

})