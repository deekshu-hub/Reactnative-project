import { StyleSheet, Text, View  } from 'react-native';
import Header from './Header';
import Login from './Login';
import  SignUP from './Signup';
import Home from './home';
import Edit from './Edit';
import Manageusers from './Manageusers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';


const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer
      ref={navigationRef}>
      <Stack.Navigator initialRouteName='LoginPage'>

         {<Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => <Header headerDisplay="Login" />
          }}
        />} 

        {<Stack.Screen
          name="SignUP"
          component={SignUP}
          options={{
            header: () => <Header headerDisplay="Signup" />
          }}
        />}
        {<Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header headerDisplay="Home" />
          }}
        />}
         {<Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            header: () => <Header headerDisplay="Edit" />
          }}
        />}
         {/* {<Stack.Screen
          name="Manageusers"
          component={Manageusers}
          options={{
            header: () => <Header headerDisplay="Home" />
          }}
        />}
        */}

        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});