import React, { useState } from "react";
import { Button, Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BoldTextInput from "../components/atoms/BoldTextInput";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ReadMode({navigation}){

    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");

    return(
        <SafeAreaView>
            <View style={styles.globalContainer}>
                <View style={styles.headerSection}>
                    <Text style={styles.title}>Baxter</Text>
                    <Text style={styles.subtitle}>Selección del modo de lectura</Text>
                </View>
                <View style={styles.bodySection}>
                    <Pressable onPress={()=>{navigation.navigate("FormRead")}}>
                        <View style={styles.btnImage}>
                            <Image style={styles.imgBtn} source={require("./../assets/img/edificio.jpg")}></Image>
                        </View>
                        <Text style={styles.btnText}>En línea</Text>
                    </Pressable>
                    <Pressable  onPress={()=>{navigation.navigate("FormRead")}}>
                        <View style={styles.btnImage}>
                            <Image style={styles.imgBtn} source={require("./../assets/img/edificio.jpg")}></Image>
                        </View>
                        <Text style={styles.btnText}>Inventario</Text>
                    </Pressable>
                </View>
                <View style={styles.footerSection}>
                    <Pressable style={styles.footerBtn} onPress={()=>{navigation.navigate("Home")}}>
                        <Icon 
                            name="home"
                            type="material-community"
                            color='#ffffff'
                            size={40}
                            style={styles.iconFooter}
                        ></Icon>
                        <Text style={styles.link}>Home</Text>
                    </Pressable>
                    <Pressable style={styles.footerBtn} onPress={()=>{navigation.navigate("FormRead")}}>
                        <Icon 
                            name="text-box-search-outline"
                            type="material-community"
                            color='#ffffff'
                            size={40}
                            style={styles.iconFooter}
                        ></Icon>
                        <Text style={styles.link}>Lectura</Text>
                    </Pressable>
                    <Pressable style={styles.footerBtn} onPress={()=>{navigation.navigate("Scanner")}}>
                        <Icon 
                            name="magnify"
                            type="material-community"
                            color='#ffffff'
                            size={40}
                            style={styles.iconFooter}
                        ></Icon>
                        <Text style={styles.link}>Consultar</Text>
                    </Pressable>
                    <Pressable style={styles.footerBtn} onPress={()=>{navigation.navigate("Scanner")}}>
                        <Icon 
                            name="clipboard-text-clock-outline"
                            type="material-community"
                            color='#ffffff'
                            size={40}
                            style={styles.iconFooter}
                        ></Icon>
                        <Text style={styles.link}>Histórico</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    globalContainer:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#090774',
        height: height
    },
    headerSection:{
        width: width,
        height: 80,
        backgroundColor: '#00004b',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title:{
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#ffffff',
        fontSize: 30,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
    bodySection:{

    },
    btnImage:{
        width: width * 0.4,
        height: width * 0.4,
        backgroundColor: '#5d71c8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: (width * 0.4) /2,
        marginTop: 40
    },
    imgBtn:{
        width: 100,
        height: 100,
        aspectRatio: 1
    },
    btnText:{
        fontSize: 20,
        color: "#ffffff",
        textAlign: "center",
        marginTop: 5,
        textDecorationLine: 'underline'
    },
    footerSection: {
        height: height * 0.15,
        width: width,
        backgroundColor: "#00004b",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    footerBtn:{
        width: width * 0.25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    link:{
        color: '#ffffff',
        textAlign: "center"
    }

})