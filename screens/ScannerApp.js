import React from 'react';
import { View, Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function ScannerApp({ navigation }) {
  const onSuccess = (e) => {
    console.log(e,'data');
    // Aquí puedes realizar acciones con los datos escaneados, como mostrarlos en la pantalla Result
    navigation.navigate('Result', { type: e.type, data: e.data });
  };  

  return (
    <View style={{ flex: 1 }}>
      <QRCodeScanner onRead={onSuccess} />
    </View>
  );
}