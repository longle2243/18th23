import React from 'react';
import {
    View,
    Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export function GoToScreen({ screenName, itemId, itemName }) {
    const navigation = useNavigation();
    return (
        <View style={{display:'none'}}>
            <Button
                title={` Xem them `}
                // ${itemName}
                onPress={() => {
                    navigation.navigate(screenName, {
                        itemId: itemId,
                    });
                }}
            />
        </View>
    );
}