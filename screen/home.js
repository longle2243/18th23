
import React from "react";
import { View, Text, Button } from "react-native"; 

import { styles } from "../style/stylesheet";
import { auth, signOut } from "../firebase";

export function Home({ navigation }) {
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text} onPress={()=>{navigation.navigate("Forum")}}>Forum</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text} onPress={()=>{navigation.navigate("Chat")}}>Chat</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text} onPress={()=>{navigation.navigate("Todolist")}}>Todo List</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text style={styles.text} onPress={()=>{navigation.navigate("AVG")}}>AVG</Text>
        </View>
      </View>
    </View>
  );
}