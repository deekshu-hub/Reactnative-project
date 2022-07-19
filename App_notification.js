import'react-native-gesture-handler';
import React, { useEffect } from "react";
import { Text,View } from 'react-native';
import * as Notifcations from 'expo-notifications';
import * as Permissions from 'expo-permissions';
export default function App() {
    useEffect(() => {
        registerForPushNotification().then(token => console.log(token));
    },[]);
    async function registerForPushNotification() {
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    
    if (status !='granted') {
    alert("failed to get push token for push notification");
    return;
}
token = (await Notifcations.getExpoPushTokenAsync()).data;
return token;
}
return (
    <View>
    <Text>Push Notification Example</Text>
    </View>
)
}