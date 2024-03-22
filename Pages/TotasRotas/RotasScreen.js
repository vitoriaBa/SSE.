
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import MyTabBar  from './MyTabBar';
import TelaInicialScreen from '../TelaInicial';
import Tela2Screen from '../Tela2';
import Tela3Screen from '../Tela3';
import LoginScreen from '../Login';  
import Rotastab from '../TotasRotas/Rotastab'; 



const Tab = createMaterialTopTabNavigator();

export default function RotasScreen() {
  return (
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="TelaInicial" component={TelaInicialScreen} />
        <Tab.Screen name="Tela2Screen" component={Tela2Screen} />
        <Tab.Screen name="Tela3Screen" component={Tela3Screen} />
        <Tab.Screen name="LoginScreen" component={LoginScreen} />
        <Tab.Screen name="Rotastab" component={Rotastab} />
      </Tab.Navigator>
  );
}








