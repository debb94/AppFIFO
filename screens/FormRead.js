import React, { useEffect, useState } from "react";
import { Button, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BoldTextInput from "../components/atoms/BoldTextInput";
import BoldTextInputIconEnd from "../components/atoms/BoldTextInputIconEnd";
import BoldButton from "../components/atoms/BoldButton";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function FormRead({ route, navigation }){

    let params = route.params;

    const [data,setData] = useState({});

    useEffect(()=>{
        // let params = route.params;
        // console.log(params,'parametros');
        // if(params?.loteString !== undefined){
        //     setLote(params.loteString);
        // }

    },[])
    useEffect(()=>{
        // let params = route.params;
        console.log(params,'parametros');
        if(params?.loteString !== undefined){
            setLote(params.loteString);
        }

    },[params])

    const [lote,setLote] = useState("");
    const [fechaLote,setFechaLote] = useState("");
    const [description,setDescription] = useState("");
    const [quantity,setQuantity] = useState("");


    const actionScanner1 = ()=>{
        navigation.navigate("ScannerLote");
    }
    const actionScanner2 =()=>{
        navigation.navigate("ScannerDescription");
    }

    const goToConfirmScreen = ()=>{
        navigation.navigate("ConfirmScreen",{lote: lote, description, quantity})
    }
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.globalContainer}>
                    <View style={styles.headerSection}>
                        <Text style={styles.title}>Baxter</Text>
                        <Text style={styles.subtitle}>Ingresar lectura</Text>
                    </View>
                    <View style={styles.bodySection}>
                        <Text style={styles.subtitle}>Información del lote</Text>
                        <BoldTextInputIconEnd
                            value={lote}
                            setValue={setLote}
                            placeholder="Lote"
                            type="text"
                            icon="barcode-scan"
                            actionIcon={actionScanner1}
                        ></BoldTextInputIconEnd>
                        <BoldTextInput
                            value={fechaLote}
                            setValue={setFechaLote}
                            placeholder="Fecha del lote"
                            type="text"
                        ></BoldTextInput>

                        <Text style={styles.subtitle}>Información del Palet</Text>
                        <BoldTextInputIconEnd
                            value={description}
                            setValue={setDescription}
                            placeholder="Descripción"
                            type="text"
                            icon="barcode-scan"
                            actionIcon={actionScanner2}
                        ></BoldTextInputIconEnd>
                        <BoldTextInput
                            value={quantity}
                            setValue={setQuantity}
                            placeholder="Cantidad"
                            type="text"
                        ></BoldTextInput>

                        <Text style={styles.subtitle}>Información de la zona</Text>

                        <View style={styles.buttonContainer}>
                            <BoldButton onPress={goToConfirmScreen} title="Continuar"/>
                        </View>

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
            </ScrollView>
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
    },




    buttonContainer:{
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    

})