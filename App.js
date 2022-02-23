import React, { useEffect, useState } from 'react';
import { Text, View, Button, ActivityIndicator, FlatList } from 'react-native';
import { styles } from "./stylesheet";
// import { Loadsanpham } from "./loadsp";

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function GoToScreen({ screenName }) {
  const navigation = useNavigation();
  return (
    <Button
      title={`Xem chi tiet ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}
// function Home({ navigation }) {

//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <View style={styles.inner}>
//           <GoToScreen screenName="SanPham" />
//         </View>
//       </View>
//     </View>
//   );
// }
function SanPham({ navigation }) {
  return (
    <View >
      <GoToScreen screenName="Home" />
    </View>
  );
}
function LienHe() {
  return (
    <View >
      <Text> Day la trang thong tin lien he</Text>
    </View>
  );
}

function GioHang() {
  return (
    <View >
      <Text> Day la trang thong tin GioHang</Text>
    </View>
  );
}
function TaiKhoan() {
  return (
    <View >
      <Text> Day la trang thong tin ca nhan</Text>
    </View>
  );
}
function Stacks() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Drawers" component={Drawershome} />
      <Stack.Screen name="SanPham" component={SanPham} />
    </Stack.Navigator>
  );
}
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Drawershome} options={{ headerShown: false }} />
      <Tab.Screen name="GioHang" component={Drawersgiohang} options={{ headerShown: false }} />
      <Tab.Screen name="LienHe" component={Drawerslienhe} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
function Drawershome() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Loadsanpham} options={{ headerShown: false }} />
      <Drawer.Screen name="TaiKhoan" component={TaiKhoan} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
function Drawersgiohang() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={GioHang} options={{ headerShown: false }} />
      <Drawer.Screen name="TaiKhoan" component={TaiKhoan} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
function Drawerslienhe() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={LienHe} options={{ headerShown: false }} />
      <Drawer.Screen name="TaiKhoan" component={TaiKhoan} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
const Loadsanpham = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://lql2243.000webhostapp.com');
      const json = await response.json();
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
      <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
              <View style={styles.box}>
                <View style={styles.inner}>
                  <GoToScreen screenName="SanPham" />
                  <Text>{item.id}, {item.ten}</Text>
                </View>
              </View>
          )}
        />
      )}
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
