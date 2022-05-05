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

export function taikhoan({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getData = async () => {
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
            setLoading(false);         
        }
    };

    useEffect(() => {getData();}, []);

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
                                <Text style={styles.name}>{item.ten}</Text>
                                <Text style={styles.price}>{item.sdt}</Text>
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