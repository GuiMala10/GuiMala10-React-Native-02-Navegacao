import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Perfil from '../../Views/Perfil/Perfil';
import RotasDrawer from '../rotasDrawer/RotasDrawer'; 

const Tab = createBottomTabNavigator();

const RotasTab = () => {

     return (
            <Tab.Navigator tabBarOptions = 
                {{ 
                    labelStyle:{fontSize: 24},
                    style: {backgroundColor: '#000080'},
                    activeTintColor: "#FFFFFF"
                 }}
            >

                <Tab.Screen name="Inicial" component={RotasDrawer} />
                <Tab.Screen name="Perfil" component={Perfil} />

            </Tab.Navigator>     

        );
}

export default RotasTab;