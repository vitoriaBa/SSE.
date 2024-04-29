
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import {NavigationContainer} from '@react-navigation/native';

import MyTabBar  from './MyTabBar';
import TelaInicialScreen from '../SlidesPages/TelaInicial';
import Tela2Screen from '../SlidesPages/Tela2';
import Tela3Screen from '../SlidesPages/Tela3';
import LoginScreen from '../SlidesPages/Login';  
import Rotastab from '../TotasRotas/Rotastab'; 





const Tab = createMaterialTopTabNavigator();

export default function RotasScreen() {
  return (
    //<NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
       



        <Tab.Screen name="TelaInicial" component={TelaInicialScreen} />
        <Tab.Screen name="Tela2Screen" component={Tela2Screen} />
        <Tab.Screen name="Tela3Screen" component={Tela3Screen} />
        <Tab.Screen name="LoginScreen" component={LoginScreen} />
        <Tab.Screen name="Rotastab" component={Rotastab} />

      </Tab.Navigator>
      
     // </NavigationContainer>
  );
}






