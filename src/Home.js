import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Rating,SearchBar } from 'react-native-elements';
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


  // const ratingCompleted = (rating: number) => {
  //   console.log('Rating is: ' + rating);
  // };
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View >
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        platform={Platform.OS}
        style={styles.timkiem}
        containerStyle={{ backgroundColor: 'white'  }}
      />
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

                <View style={styles.khungsao}>
                <Text style={styles.text}>{item.ten}</Text>
                <Text style={styles.gia}>{item.gia}</Text>
                {/* <GoToScreen
                    screenName="SanPham"
                    itemId={item.id}
                    itemName={item.ten}
                  /> */}
                {/* <Rating
                  // showRating
                  imageSize={15}
                  onFinishRating={ratingCompleted}
                  style={{ paddingVertical: 10 }}
                /> */}
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};