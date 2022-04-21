import React, { useState, useEffect } from "react";
import { View, Text, TextInput,TouchableOpacity, } from "react-native";
import { styles } from "../style/stylesheet";
import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "../firebase";

export function signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {  navigation.replace("Home");  }
    });
    return unsubscribe;}, []);

  const handleSignUp = () => {
    if(password!==password2){
      alert("Mật khẩu không khớp");
    }else{
      createUserWithEmailAndPassword(auth ,email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
    }
  };

  // const themthongtin = () => {
  //   try {
  //       const response = fetch('https://lql2243.000webhostapp.com/handle/themthongtin.php?',
  //           {
  //               method: 'POST',
  //               headers: {
  //                   Accept: 'application/json',
  //                   'Content-Type': 'application/json',
  //               },
  //               body: JSON.stringify({
  //                   iduser: auth.currentUser?.email,
  //               }),
  //           }
  //       );
  //   } catch (error) {
  //       console.error(error);
  //   } 
  // };

  return (
    <View  style={styles.containerlogin}  behavior="padding">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm Password"
        value={password2}
        onChangeText={text => setPassword2(text)}
        style={styles.input}
        secureTextEntry
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={handleSignUp}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{navigation.navigate("Login")}}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Log In</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}
