import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import 'react-native-gesture-handler';

export const Loadsanpham = () =>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getData = () => {
      try {
        const response =  fetch('https://lql2243.000webhostapp.com');
        const json =  response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id}, {item.ten}</Text>
            )}
          />
        )}
      </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5
  },
  inner: {
    flex: 1,
    // backgroundColor: '#D1E0DB',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#33CCFF",
    fontSize: 30,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});