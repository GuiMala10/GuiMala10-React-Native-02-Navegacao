import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from '../../Views/Perfil/Perfil';
import Item from  '../../Views/Item/Item';
import Colecao from '../../Views/Colecao/Colecao';
import RotasPrincipalStack from '../rotasStack/RotasPrincipalStack';

const Drawer = createDrawerNavigator();

const rotasDrawer = () => {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Inicial" component={RotasPrincipalStack}/>
                <Drawer.Screen name="Colecao" component={Colecao}/>
                <Drawer.Screen name="Item" component={Item}/>
                <Drawer.Screen name="Perfil" component={Perfil}/>
            </Drawer.Navigator>
        );
    }

    export default rotasDrawer;