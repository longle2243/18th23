import React, { useState, useEffect } from "react";
import { View, Text, TextInput,TouchableOpacity,Alert } from "react-native";
import { styles } from "../style/stylesheet";
import {auth,} from "../firebase";

export function edit({ navigation }) {
  const [ten, setTen] = useState("");
  const [sdt, setSdt] = useState("");
  const [diachi, setDiachi] = useState("");

  const themthongtin = () => {
    try {
        const response = fetch('https://lql2243.000webhostapp.com/handle/suathongtin.php?',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    iduser: auth.currentUser?.email,
                    ten: ten,
                    sdt: sdt,
                    diachi: diachi,
                }),
            }
        );
    } catch (error) {
        console.error(error);
    } finally {
        Alert.alert("Update successful");
        navigation.navigate("Info");
    }
  };

  return (
    <View  style={styles.containerlogin}  behavior="padding">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Ho va Ten"
        value={ten}
        onChangeText={text => setTen(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="So dien thoai"
        value={sdt}
        onChangeText={text => setSdt(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Dia chi"
        value={diachi}
        onChangeText={text => setDiachi(text)}
        style={styles.input}
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={themthongtin} style={styles.button}>
        <Text style={styles.buttonText}>UPDATE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("Info")}} style={[styles.button, styles.buttonOutline]}>
        <Text style={styles.buttonOutlineText}>BACK</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}
