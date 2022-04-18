import React from 'react';
import { View, Text } from "react-native"; 
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
import {GioHang} from './src/giohang';
import {TaiKhoan} from './src/taikhoan';
import { Login } from './src/login';
import { SignOut } from './src/Signout';
import { Signup } from './src/signup';

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Drawers} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Trang chủ"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Thông tin cá nhân"
        component={SignOut}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="SanPham" component={SanPham} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Loadsanpham}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Giỏ Hàng"
        component={GioHang}
        options={{ headerShown: false }}        
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}


