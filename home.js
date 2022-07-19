//import * as React from 'react';
import { View, Text, Button } from 'react-native';
//np,import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CustomDrawer from './customdrawer';
import Manageusers from'./Manageusers';
import Managedocuments from './ManageDocuments';
import Welcome from './Welcome';
import Groupchat from './chat';

// import Groupchat from './Groupchat';
// import Logout from './Logout';

// function Groupchat({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }


// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Manageusers" component={Manageusers} />
      <Drawer.Screen name="chat" component={Groupchat} />
      <Drawer.Screen name="Managedocuments" component={Managedocuments} /> 
      

    </Drawer.Navigator>
  );
}

export default function Home() {
  return (
    
      <MyDrawer />
    
  );
}