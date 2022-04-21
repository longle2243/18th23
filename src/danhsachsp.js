import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './stylesheet';

export const danhsachsp = () => {
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getData = async () => {
    setFetching(true);
    try {
      const response = await fetch('https://lql2243.000webhostapp.com/handle/danhsachsanpham.php');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
      setLoading(false);
    }
  };
  useEffect(() => {getData();}, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.khungngoai}
          data={data}
          onRefresh={getData}
          refreshing={isFetching}
          numColumns={2}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (

            <View >
            <TouchableOpacity style={styles.khungsanpham} onPress={() => {  navigation.navigate("Product", {  itemId: item.id,});}}>
              <View style={styles.khungsanpham2} >

                <Image style={styles.hinh} source={{ uri:'https://lql2243.000webhostapp.com/'+item.hinh }}/>
                <View style={styles.khungtext}>
                  <Text style={styles.text}>{item.ten}</Text>
                  <Text style={styles.gia}>{item.gia}</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};