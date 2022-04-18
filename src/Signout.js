import React from 'react';
import {
    View,
    Button,
    SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, signOut } from "../firebase";
export function SignOut() {
    const navigation = useNavigation();
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                navigation.replace("LogIn");
            })
            .catch((error) => alert(error.message));
    };
    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Dang Xuat"
                    onPress={handleSignout}
                />
            </View>
        </SafeAreaView>
    );
}