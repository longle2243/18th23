import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function lienhe() {
    return (
        <SafeAreaView style={styles.container}>

          <View style={styles.body}>
              <Text style={styles.name}>Shopping App</Text>
              <Text style={styles.mail}>SDT: 0923475678</Text>
              <Text style={styles.mail}>Dia chi: Ninh kieu, Tp.Can Tho, Viet Nam</Text>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.text}>LIKE</Text>  
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

  buttonContainer: {
    marginTop:30,
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    width:250,
    borderRadius:30,
    backgroundColor: "yellow",
  },
  text:{
    color: "grey",
    fontWeight: "bold",
    fontSize: 18,
  },
});
