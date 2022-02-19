import React from 'react';
import { Text, View,Button} from 'react-native';
import { styles } from "./stylesheet";

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
      title={`Go to ${screenName}`}
      onPress={() => navigation.goBack}
    />
  );
}
function SanPham({ navigation }) {
  return (
    <View>
      <View style={styles.container}>
        <View style={{display: 'none'}}>
        <GoToScreen screenName="Home" />
        </View> 
    </View>
    {/* <BottomTabs/> */}
    </View>
    
  );
}
function TaiKhoan({ navigation }) {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.text} onPress={()=>{navigation.navigate("HomeScreen")}}>Day la trang chi tiet San Pham</Text> */}
        <GoToButton screenName="CaNhan" />
    </View>
  );
}
function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <GoToScreen screenName="SanPham" />
        </View>
      </View>
    </View> 
  );
}
function GioHang() {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gio Hang</Text>
    </View>
    <Drawers/>
    </View>
  );
}
function CaNhan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ca Nhan</Text>
    </View>
  );
}
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTabs" component={Drawers} options={{ headerShown: false }}/>
      <Tab.Screen name="Gio Hang" component={GioHang} />
      <Tab.Screen name="Ca Nhan" component={CaNhan} />
    </Tab.Navigator>
    
  );
}
function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Homedawer" component={Home} />
      <Drawer.Screen name="TaiKhoan" component={TaiKhoan} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="HomeStack" component={BottomTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="SanPham" component={SanPham} />
        <Stack.Screen name="Drawers" component={Drawers} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}