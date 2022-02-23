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