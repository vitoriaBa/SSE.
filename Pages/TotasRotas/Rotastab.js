import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Home from '../Home';
import Chat from '../Chat';
import Calendario from '../Calendario';
import Horarios from '../Horarios';
import Teste from '../teste';

const Tab = createBottomTabNavigator();

export default function Rotastab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#206550',
        borderTopWidth: 0,
      },
      
        
      }}>
      
      
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendario" component={Calendario} />
      <Tab.Screen
        name="  "
        component={Teste}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./imagenIcons/addbuton.png')}
              style={{
                width: 60,
                height: 71,
                boderColor:'#174738',
                borderEndWidth:10,
                bottom:20 
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Horarios" component={Horarios} />
    </Tab.Navigator>
  );
}
