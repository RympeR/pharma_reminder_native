import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateEditObject } from './src/screens/CreateEditObject';
import { MainPage } from './src/screens/MainPage';

const Stack = createNativeStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={ MainPage }
                options={{ headerShown: true, title: 'Главная'}}
            />
            <Stack.Screen
                name="pill"
                component={ CreateEditObject }
                options={({ route }) => ({ title: route.params.title })}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
