import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";


const BoldTextInput = ({placeholder,icon, value, setValue, type='text', readonly})=>{

    const [val,setVal] = useState('');
    const width = Dimensions.get('window').width;

    useEffect(()=>{
        setVal(value);
    },[value])

    const styles = StyleSheet.create({

        inputContainerGlobal: {
            width: width,
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
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
            width: width * 0.8,
            backgroundColor: '#ffffff55',
            color: '#ffffff',
            paddingLeft: 20,
            borderRadius: 30,
        },
    })

    return (
        <View style={styles.inputContainerGlobal}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setValue}
                    value={value}
                    editable={(readonly) ? false : true}
                    placeholder={placeholder}
                    type={type}
                    secureTextEntry={ type =='password'? true: false }
                    placeholderTextColor="#aaaaaa"
                />
            </View>
        </View>
    );
}

export default BoldTextInput;