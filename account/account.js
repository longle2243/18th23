import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,ActivityIndicator,FlatList, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, signOut } from "../firebase";
import { SafeAreaView } from 'react-native-safe-area-context';

export function account() {
  const navigation = useNavigation();
  const handleSignout = () => {
    signOut(auth)
      .then(() => { navigation.replace("Login"); })
      .catch((error) => alert(error.message));
  };

  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  const getData = async () => {
    setFetching(true);
    try {
      const response = await fetch('https://lql2243.000webhostapp.com/handle/thongtinuser.php?',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: auth.currentUser?.email,
          }),
        }
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
      setLoading(false);
    }
  };

  useEffect(() => { getData(); }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          onRefresh={getData}
          refreshing={isFetching}
          // scrollEnabled={false}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View >
              <Image style={styles.header} source={{ uri: 'https://lql2243.000webhostapp.com/img/avatar.jpg' }} />
              <Image style={styles.avatar} source={{ uri: 'https://ui-avatars.com/api/?name='+ item.ten } } />
              <View style={styles.body}>
                <Text style={styles.name}>{item.ten}</Text>
                <Text style={styles.mail}>Gmail: {auth.currentUser?.email}</Text>
                <Text style={styles.mail}>SĐT: {item.sdt}</Text>
                <Text style={styles.mail}>Dia chi: {item.diachi}</Text>

                <TouchableOpacity style={styles.buttonContainer1} onPress={() => {navigation.navigate("Edit");}}>
                  <Text style={styles.text}>EDIT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={handleSignout}>
                  <Text style={styles.text}>LOG OUT</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100
  },
  body: {
    alignItems: 'center',
    marginTop: '30%',
  },

  name: {
    fontSize: 28,
    color: "#00BFFF",
    fontWeight: "600",
    padding: 10,
  },
  mail: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
    padding: 5,
  },

  buttonContainer1: {
    marginTop: 30,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 30,
    backgroundColor: "red",
  },
  buttonContainer: {
    marginTop: 30,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});