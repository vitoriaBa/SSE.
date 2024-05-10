
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import MyTabBar  from './MyTabBar';
import TelaInicial from '../SlidesPages/TelaInicial';
import Tela2 from '../SlidesPages/Tela2';
import Tela3 from '../SlidesPages/Tela3';
import Login from '../SlidesPages/Login';  
import Rotastab from '../TotasRotas/Rotastab'; 




const Tab = createMaterialTopTabNavigator();

export default function RotasScreen() {
  return (

      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
       
        <Tab.Screen name="TelaInicial" component={TelaInicial} />
        <Tab.Screen name="Tela2Screen" component={Tela2} />
        <Tab.Screen name="Tela3Screen" component={Tela3} />
        <Tab.Screen name="LoginScreen" component={Login} />
        <Tab.Screen name="Rotastab" component={Rotastab} />

      </Tab.Navigator>
    
  );
}







