import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import {auth, signInWithEmailAndPassword} from "../firebase";
import { styles } from "../style/stylesheet";

export function login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {  navigation.replace("Home")}
    })
    return unsubscribe  }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(error => alert("Tài khoản hoặc mật khẩu không đúng"))
  }
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
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity  onPress={handleLogin}  style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{navigation.navigate("Signup")}}  style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}