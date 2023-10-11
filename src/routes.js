/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Feed from './pages/Feed';

const Stack = createStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }} name="Home" component={Home} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }} name="SignIn" component={SignIn} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }} name="SignUp" component={SignUp} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }} name="Feed" component={Feed} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
