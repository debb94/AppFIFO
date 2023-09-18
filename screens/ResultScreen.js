import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function ResultScreen({ route, navigation }) {
    const {type, data } = route.params;

    useEffect(()=>{
        let body = {
            user_id: 1,
            fifohistory_lote_code: data,
            fifohistory_zone: "PW9",
            fifohistory_quantity: 6000
        }
        sendRequest(body);
        console.log("ejecutado");
    },[])

    // const apiUrl = "http://192.168.10.208:8000/fifo-history";

    const sendRequest = async (body)=>{
        try {
            const apiUrl = "http://192.168.10.208:8000/fifo-history";

            const result = await axios.post(apiUrl, body);
            console.log('Respuesta de la solicitud POST:', result.data);
            // const response = await fetch(apiUrl, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ body }),
            // })
        
            // if (response.ok) {
            //     const responseData = await response.json();
            //     console.log('Respuesta de la API:', responseData);
            // } else {
            //     console.error('Error al enviar los datos a la API');
            // }
        } catch (error) {
            console.error('Error al realizar la solicitud POST:', error);
        //     console.error('Error:', error);
        }
    }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tipo de código: {type}</Text>
      <Text>Datos escaneados: {data}</Text>
    </View>
  );
}