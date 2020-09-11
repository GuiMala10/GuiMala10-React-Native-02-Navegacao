import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../../Views/Inicial/Inicial';
import Item from  '../../Views/Item/Item';
import Colecao from '../../Views/Colecao/Colecao';
import estiloRotasStack from './estiloRotasStack';

 const Stack = createStackNavigator();

 const RotasPrincipalStack = () => {

        return (
            <Stack.Navigator initialRouteName="Inicial">

                    <Stack.Screen
                    name = "Inicial"
                    component = {Inicial}
                    options = { {
                    cardStyle: estiloRotasStack.screenInicial,
                        headerShown: false,
                    } }
                    />

                    <Stack.Screen
                    name = "Colecao"
                    component = {Colecao}
                    options = { {
                    cardStyle: estiloRotasStack.screenColecao,
                        headerShown: false,
                    } }
                    />

                    <Stack.Screen
                    name = "Item"
                    component = {Item}
                    options = { {
                    cardStyle: estiloRotasStack.screenItem,
                        headerShown: false,
                    } }
                    />
            </Stack.Navigator> 

        );

 }

 export default RotasPrincipalStack;