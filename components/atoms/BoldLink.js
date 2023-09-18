import { Dimensions, Pressable, StyleSheet, Text } from "react-native"



export default BoldLink = ({title,onPress})=>{

    const width = Dimensions.get("window").width;

    const styles = StyleSheet.create({
        btnContinue: {
            width: width * 0.8,
            height: 60,
            textAlign: "center",
            display: "flex",
            alignItems: 'center',
            justifyContent: "center"
        },
        btnContinueText:{
            fontSize: 18,
            fontWeight: "bold",
            color: '#fff',
            textDecorationLine: "underline"
        },
    });

    return(
        <Pressable onPress={onPress} style={styles.btnContinue}>
            <Text style={styles.btnContinueText}>{title}</Text>
        </Pressable>
    )
}