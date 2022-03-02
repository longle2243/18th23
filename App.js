import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

import {Loadsanpham} from './src/Home';
import {SanPham} from './src/product';
// import {SanPham} from './src/sanpham';
import { GoToScreen } from './src/chuyentrang';
import {styles} from './src/stylesheet';
import {GioHang} from './src/giohang';

// function GioHang() {
//   return (
//     <View>
//       <Text> Day la trang thong tin GioHang</Text>
//     </View>
//   );
// }
function TaiKhoan() {
  return (
    <View>
      <Text> Day la trang thong tin ca nhan</Text>
    </View>
  );
}
function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Drawers" component={Drawershome} />
      <Stack.Screen name="SanPham" component={SanPham} />
    </Stack.Navigator>
  );
}
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Drawershome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="GioHang"
        component={GioHang}
        options={{ headerShown: false }}
        
      />
    </Tab.Navigator>
  );
}
function Drawershome() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Loadsanpham}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="TaiKhoan"
        component={TaiKhoan}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}


