import React, { useEffect, useState } from "react";
import { Button, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BoldTextInput from "../components/atoms/BoldTextInput";
import BoldTextInputIconEnd from "../components/atoms/BoldTextInputIconEnd";
import BoldLink from "../components/atoms/BoldLink";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ConfirmScreen({ route, navigation }){

    let params = route.params;

    // const [data,setData] = useState({});

    useEffect(()=>{
        // let params = route.params;
        // console.log(params,'parametros');
        // if(params?.loteString !== undefined){
        //     setLote(params.loteString);
        // }
        console.log(params,"<---parametros");

    },[])

    // const [lote,setLote] = useState("");
    // const [fechaLote,setFechaLote] = useState("");
    // const [description,setDescription] = useState("");
    // const [quantity,setQuantity] = useState("");


    return(
        <SafeAreaView>
            <View style={styles.globalContainer}>
                <View style={styles.headerSection}>
                    <Text style={styles.title}>Baxter</Text>
                    <Text style={styles.subtitle}>Confirmar lectura</Text>
                </View>
                <View style={styles.bodySection}>
                    <ScrollView>
                        <View style={styles.section}>
                            <Text style={styles.subtitle}>LOTE</Text>
                            <Text style={styles.textInfo}>Código del lote</Text>
                            <Text style={styles.textInfoValue}>{params.lote}</Text>
                            <Text style={styles.textInfo}>Fecha del lote</Text>
                            <Text style={styles.textInfoValue}>{params.lote}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle}>PALLET</Text>
                            <Text style={styles.textInfo}>Código del pallet</Text>
                            <Text style={styles.textInfoValue}>{params.description}</Text>
                            <Text style={styles.textInfo}>Cantidad</Text>
                            <Text style={styles.textInfoValue}>{params.quantity}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.subtitle}>ZONA</Text>
                            <Text style={styles.textInfo}>Código del lote</Text>
                            <Text style={styles.textInfoValue}>{params.lote}</Text>
                        </View>
                        <View>
                            <BoldButton onPress={()=>{navigation.navigate("SuccessScreen")}} title="Confirmar"/>
                            <BoldLink onPress={()=>{navigation.goBack()}} title="Atras"/>
                        </View>
                    </ScrollView>
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
        height: height* 0.68,
        width: width - 30,
        marginLeft: 15,
        marginRight: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    section:{
        borderBottomWidth: 3,
        borderBottomColor: "#fff",
        marginBottom: 20,
        paddingBottom: 10
    },
    textInfo:{
        color: "#fff",
        fontStyle: "italic",
        marginTop: 5
    },
    textInfoValue:{
        color: "#fff",
        fontSize: 18,
        fontWeight:"bold",
        paddingLeft: 30
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