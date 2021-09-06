import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GroceryListScreen from './screens/groceryList/GroceryList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GroceryList"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="GroceryList" component={GroceryListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
