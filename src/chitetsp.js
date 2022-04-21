import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    SafeAreaView,
    Alert
} from 'react-native';

import { auth } from "../firebase";

export function chitetsp({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { itemId } = route.params;
    const getData = async () => {
        try {
            const response = await fetch('https://lql2243.000webhostapp.com/handle/chitietsanpham.php?',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: itemId,
                    }),
                }
            );
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            
        }
    };

    useEffect(() => {getData();}, []);
    
      const themgiohang = async () => {
        try {
            const response = await fetch('https://lql2243.000webhostapp.com/handle/themgiohang.php?',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: itemId,
                        iduser: auth.currentUser?.email,
                    }),
                }
            );
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            Alert.alert("Thêm vào giỏ thành công");
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View >
                            <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                                <Image style={styles.productImg} source={{ uri: 'https://lql2243.000webhostapp.com/'+item.hinh }} />
                                <Text style={styles.name}>{item.ten}</Text>
                                <Text style={styles.price}>{item.gia}</Text>
                            </View>
                            <View style={styles.addToCarContainer}>
                                <TouchableOpacity style={styles.shareButton} onPress={themgiohang}>
                                    <Text style={styles.shareButtonText}>Thêm vào giỏ hàng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    productImg: {
        marginTop: 20,
        width: 300,
        height: 400,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold'
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    addToCarContainer: {
        marginHorizontal: 30
    }
});    