import React, { useEffect, useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SuccessScreen({ route, navigation }){

    let params = route.params;

    useEffect(()=>{
        console.log(params,"<---parametros");

    },[])

    return(
        <SafeAreaView>
            <View style={styles.globalContainer}>
                <View style={styles.headerSection}>
                    <Text style={styles.title}>Baxter</Text>
                    <Text style={styles.subtitle}>Registro almacenado</Text>
                </View>
                <ScrollView style={styles.bodySection}>
                    <View style={styles.message}>
                        <Text style={styles.textMessage}>Almacenamiento exitoso!</Text>
                        <Image style={styles.imgSuccess} source={require("./../assets/img/success.png")}></Image>
                    </View>
                </ScrollView>
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
                    <Pressable style={styles.footerBtn} onPress={()=>{navigation.navigate("Scanner")}}>
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
        display: "flex",
        flex: 1,
        minHeight: "250"
    },
    message:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.2
    },
    textMessage:{
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    imgSuccess:{
        width: width * 0.4,
        height: width * 0.4,
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