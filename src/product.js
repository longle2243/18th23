import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';
// import { styles } from './stylesheet';
import { Rating,SearchBar } from 'react-native-elements';
import { GoToScreen } from './chuyentrang';

export function SanPham({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { itemId } = route.params;
    const getData = async () => {
        try {
            const response = await fetch(
                'https://lql2243.000webhostapp.com/chitietsanpham.php?',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // id: 1,
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
    useEffect(() => {
        getData();
    }, []);

    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
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
                                <Image style={styles.productImg} source={{ uri: item.hinh }} />
                                <Text style={styles.name}>{item.ten}</Text>
                                <Text style={styles.price}>{item.gia}</Text>
                                <Rating
                                    // showRating
                                    imageSize={30}
                                    onFinishRating={ratingCompleted}
                                    style={{ paddingVertical: 10 }}
                                />
                            </View>
                            <View style={styles.addToCarContainer}>
                                <TouchableOpacity style={styles.shareButton}>
                                    <Text style={styles.shareButtonText}>Thêm vào giỏ hàng</Text>
                                </TouchableOpacity>
                                <GoToScreen screenName="Home" />
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
        // marginTop: 20,
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