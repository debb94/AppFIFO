import { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";


const BoldTextInputIconEnd = ({placeholder,icon, value, setValue, type='text', actionIcon, readonly})=>{

    const [val,setVal] = useState('');
    const width = Dimensions.get('window').width;

    useEffect(()=>{
        setVal(value);
    },[value])
    
    useEffect(()=>{
        setVal(value);
    },[])

    const styles = StyleSheet.create({
        inputContainerGlobal: {
            width: width,
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            // position: 'relative',
            // width: width
        },
        inputContainer:{
            width: width * 0.8,
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 20
        },
        input: {
            height: 60,
            position: 'absolute',
            width: width * 0.72,
            backgroundColor: '#ffffff55',
            color: '#ffffff',
            paddingLeft: 20,
            borderRadius: 30,
            marginRight: 20,
        },
        icon: {
            width: 50,
            // left: width * 0.70
            // paddingLeft: width
        },
        pressIcon:{
            marginLeft: width * 0.7,
            height: 60,
            width: 50,
            display: "flex",
            justifyContent: "center"
        }
    })

    return (
        <View style={styles.inputContainerGlobal}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setValue}
                    value={value}
                    placeholder={placeholder}
                    type={type}
                    secureTextEntry={ type =='password'? true: false }
                    placeholderTextColor="#aaaaaa"
                    editable={(readonly) ? false : true}
                />
                <Pressable style={styles.pressIcon} onPress={actionIcon}>
                    <Icon
                        name={icon}
                        type="material-community"
                        color='#aaaaaa'
                        style={styles.icon}
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default BoldTextInputIconEnd;