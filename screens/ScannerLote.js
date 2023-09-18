import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'react-native-elements';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function ScannerLote({ navigation }) {

    const [flash,setFlash] = useState(RNCamera.Constants.FlashMode.auto);

  const onSuccess = (e) => {
    navigation.navigate('FormRead', { type: e.type, loteString: e.data });
  };  

  const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 28,
      padding: 32,
      fontWeight: '500',
      color: '#000'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    cameraButtons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 30
    },
    btnCameraItem:{
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: "#10101088",
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
    }
  });
  
  const flashOn =()=>{
    setFlash(RNCamera.Constants.FlashMode.torch);
  }
  const flashOff =()=>{
    setFlash(RNCamera.Constants.FlashMode.off);
  }


  return (
    <View style={{ flex: 1 }}>
      {/* <QRCodeScanner onRead={onSuccess} /> */}
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={flash}
        showMarker={true}
        topContent={
            <Text style={styles.centerText}>Scanner</Text>
        }
        bottomContent={
            <View style={styles.cameraButtons}>
                <Pressable  onPress={()=>{navigation.goBack()}} style={styles.btnCameraItem}>
                    <Icon name="arrow-left" type="material-community" size={40} color={"#fff"}></Icon>
                </Pressable>
                <Pressable  onPress={flashOn} style={styles.btnCameraItem}>
                    <Icon name="flash" type="material-community" size={40} color={"#fff"}></Icon>
                </Pressable>
                <Pressable onPress={flashOff} style={styles.btnCameraItem}>
                    <Icon name="flash-off" type="material-community" size={40} color={"#fff"}></Icon>
                </Pressable>
            </View>
        }
      />
    </View>
  );
}