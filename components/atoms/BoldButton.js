import { Dimensions, Pressable, StyleSheet, Text } from "react-native"



export default BoldButton = ({title,onPress})=>{

    const width = Dimensions.get("window").width;

    const styles = StyleSheet.create({
        btnContinue: {
            width: width * 0.8,
            height: 60,
            textAlign: "center",
            borderRadius: 30,
            backgroundColor: '#ffffff',
            display: "flex",
            alignItems: 'center',
            justifyContent: "center"
        },
        btnContinueText:{
            fontSize: 18,
            fontWeight: "bold",
            color: '#1f1c6d',
            textDecorationLine: "underline"
        },
    });

    return(
        <Pressable onPress={onPress} style={styles.btnContinue}>
            <Text style={styles.btnContinueText}>{title}</Text>
        </Pressable>
    )
}