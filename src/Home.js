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
import { Rating, SearchBar } from 'react-native-elements';
import { styles } from './stylesheet';
import { auth, signOut } from "../firebase";
import { GoToScreen } from './chuyentrang';

export const Loadsanpham = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [isFetching, setFetching] = useState(false);
  const getData = async () => {
    setFetching(true);
    try {
      const response = await fetch(
        'https://lql2243.000webhostapp.com/handle/danhsachsanpham.php'
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
  useEffect(() => {
    getData();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("LogIn");
      })
      .catch((error) => alert(error.message));
  };
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
        containerStyle={{ backgroundColor: 'white' }}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.khungngoai}
          data={data}
          onRefresh={getData}
          refreshing={isFetching}
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
                    <Image style={styles.hinh} source={{ uri: 'https://lql2243.000webhostapp.com/'+item.hinh }} />
                  </View>
                </TouchableOpacity>

                <View style={styles.khungsao}>
                  <Text style={styles.text}>{item.ten}</Text>
                  <Text style={styles.gia}>{item.gia}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};