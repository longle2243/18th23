import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

import {danhsachsp} from './src/danhsachsp';
import {chitetsp} from './src/chitetsp';
import {giohang} from './src/giohang';
import { lienhe } from './src/lienhe';

import { login } from './account/login';
import { signup } from './account/signup';
import { account } from './account/account';

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={login} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={signup} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Drawers} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Shop"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="You"
        component={account}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Product" component={chitetsp} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarLabelStyle: {
      fontSize: 15,
      fontWeight: 'bold',
      color:'grey',
      marginBottom: 10,
    },tabBarIconStyle: { display: "none" }}}>
      <Tab.Screen
        name="Shop"
        component={danhsachsp}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={giohang}
        options={{ headerShown: false }}        
      />
      <Tab.Screen
        name="Contact"
        component={lienhe}
        options={{ headerShown: false }}        
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer><Stacks/></NavigationContainer>
  );
}


