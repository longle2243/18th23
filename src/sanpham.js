import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Image,
} from 'react-native';
import {styles} from './stylesheet';

import { GoToScreen } from './chuyentrang';
export function SanPham({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { itemId } = route.params;
    const [isFetching, setFetching] = useState(false);
    const getData = async () => {
        setFetching(true);
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
            setFetching(false);
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    style={styles.khungngoai}
                    data={data}
                    onRefresh={getData}
                    refreshing={false}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View style={styles.khungsanpham}>
                            <View >
                                <Image style={styles.hinh} source={{ uri: item.hinh }} />
                                <Text style={styles.text}>
                                    {item.id} {item.ten} {item.gia}
                                </Text>
                                <GoToScreen screenName="Home" />
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
}