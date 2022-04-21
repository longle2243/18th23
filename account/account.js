import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, signOut } from "../firebase";
import { SafeAreaView } from 'react-native-safe-area-context';

export function account() {
    const navigation = useNavigation();
    const handleSignout = () => {
        signOut(auth)
            .then(() => {navigation.replace("Login");})
            .catch((error) => alert(error.message));
    };

    return (
        <SafeAreaView style={styles.container}>
          {/* <View style={styles.header}></View> */}

          <Image style={styles.header} source={{uri: 'https://lql2243.000webhostapp.com/img/avatar.jpg'}}/>
          <Image style={styles.avatar} source={{uri: 'https://lql2243.000webhostapp.com/img/avatar.jpg'}}/>
          <View style={styles.body}>
              <Text style={styles.name}>Quang Long</Text>
              <Text style={styles.mail}>longle@gmail.com</Text>
              <Text style={styles.mail}>Ninh kieu, Tp.Can Tho, Viet Nam</Text>

              <TouchableOpacity style={styles.buttonContainer1}>
                <Text style={styles.text}>EDIT</Text>  
              </TouchableOpacity> 

              <TouchableOpacity style={styles.buttonContainer} onPress={handleSignout}>
                <Text style={styles.text}>LOG OUT</Text>  
              </TouchableOpacity>              
            </View>

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:100
  },
  body:{
    alignItems: 'center',
    marginTop: '30%',
  },

  name:{
    fontSize:28,
    color: "#00BFFF",
    fontWeight: "600",
    padding: 10,
  },
  mail:{
    fontSize:16,
    color: "black",
    marginTop:10,
    padding: 5,
  },

  buttonContainer1: {
    marginTop:30,
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    width:250,
    borderRadius:30,
    backgroundColor: "red",
  },
  buttonContainer: {
    marginTop:30,
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  text:{
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
