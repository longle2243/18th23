import { getMultiFactorResolver } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
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
// import { styles } from './stylesheet';
import { auth, signOut } from "../firebase";
import { GoToScreen } from './chuyentrang';

export function GioHang({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [idsp, setIdsp] = useState([]);
    // const { itemId } = route.params;
    const getData = async () => {
        setFetching(true);
        try {
            const response = await fetch(
                'https://lql2243.000webhostapp.com/handle/giohang.php?',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // id: 5,
                        // id: itemId,
                        iduser: auth.currentUser?.email,
                        // iduser: "longle2243@gmail.com",
                        
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

    // clickEventListener = (item) => {
    //     this.setState({userSelected: item}, () =>{
    //       this.setModalVisible(true);
    //     });
    //   }

    const dathang =  ()=>{
        Alert.alert("Đặt hàng thành công");
    }
    const xoasp = () => {
        Alert.alert("Xoa thanh cong");
        // setIdsp(ids);
        // setFetching(true);
        // try {
        //     const response = await fetch(
        //         'https://lql2243.000webhostapp.com/handle/xoadonhang.php?',
        //         {
        //             method: 'POST',
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 // id: 12,
        //                 id: idsp,
        //                 // iduser: auth.currentUser?.email,
        //                 // iduser: "longle2243@gmail.com",
                        
        //             }),
        //         }
        //     );
        //     const json = await response.json();
        //     setData(json);
        // } catch (error) {
        //     console.error(error);
        // } finally {
        //     setFetching(false);
        //     setLoading(false);
        // }
    };
    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (

                <FlatList
                    style={styles.userList}
                    columnWrapperStyle={styles.listContainer}
                    data={data}
                    onRefresh={getData}
                    // onRefresh={() => this.onRefresh()}
                    // refreshing={false}
                    refreshing={isFetching}
                    numColumns={1}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} >
                            <Image style={styles.image} source={{ uri: 'https://lql2243.000webhostapp.com/'+item.hinh }} />
                            <View style={styles.cardContent}>
                                <Text style={styles.name}>{item.ten}</Text>
                                <Text style={styles.position}>{item.gia}</Text>
                                <TouchableOpacity style={styles.followButton} onPress={dathang}>
                                    <Text style={styles.followButtonText}>Đặt Hàng</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.followButton1} onPress={xoasp} >
                                    <Text style={styles.followButtonText} >Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )} />
            )}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20,
        // backgroundColor: "#eeeeee",
        backgroundColor: 'azure',

    },
    userList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 100,
        // marginTop: 10
        // flex:1,
        // justifyContent: 'space-between',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 5,
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 5,

    },

    name: {
        fontSize: 20,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    position: {
        fontSize: 15,
        flex: 1,
        alignSelf: 'center',
        color: "#696969",
        fontWeight: 'bold',
        marginTop: 5,
    },

    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#00BFFF",
    },
    followButton1: {
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "red",
    },
    followButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        // fontWeight: 'bold',
    },

});