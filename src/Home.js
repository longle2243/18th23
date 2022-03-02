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

import { GoToScreen } from './chuyentrang';

export const Loadsanpham = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const getData = async () => {
    try {
      const response = await fetch(
        'https://lql2243.000webhostapp.com/sanpham.php'
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.khungngoai}
          data={data}
          // onRefresh={() => clickEventListener()}
          numColumns={2}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.khungsanpham}>
              <View style={styles.khungchuatext} >
              <TouchableOpacity onPress={() => {
                navigation.navigate("SanPham", {
                  itemId: item.id,
                });
              }}>
                <View style={styles.viewimage}>
                <Image style={styles.hinh} source={{ uri: item.hinh }} />
                </View>
              </TouchableOpacity>
              
                <Text style={styles.gia}>{item.gia}</Text>
                <Text style={styles.text}>{item.ten}</Text>
                {/* <GoToScreen
                    screenName="SanPham"
                    itemId={item.id}
                    itemName={item.ten}
                  /> */}
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};