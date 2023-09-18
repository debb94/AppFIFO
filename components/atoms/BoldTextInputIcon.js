import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";


const BoldTextInputIcon = ({placeholder,icon, value, setValue, type='text'})=>{

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
            width: width * 0.8,
            backgroundColor: '#ffffff55',
            color: '#ffffff',
            paddingLeft: 50,
            borderRadius: 30,
        },
        icon: {
            width: 50,
        }
    })

    return (
        <View style={styles.inputContainerGlobal}>
            <View style={styles.inputContainer}>
                <Icon
                    name={icon}
                    type="material-community"
                    color='#aaaaaa'
                    style={styles.icon}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setValue}
                    value={value}
                    placeholder={placeholder}
                    type={type}
                    secureTextEntry={ type =='password'? true: false }
                    placeholderTextColor="#aaaaaa"
                />
            </View>
        </View>
    );
}

export default BoldTextInputIcon;