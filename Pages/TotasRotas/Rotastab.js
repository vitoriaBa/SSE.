import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';


import Home from '../Home';
import Chat from '../Chat';
import Calendario from '../Calendario';
import Horarios from '../Horarios';
import CriarLembrete from '../CriarLembrete';



const Tab = createBottomTabNavigator();

export default function Rotastab() {
  return (

    <Tab.Navigator   screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#206550',
        borderTopWidth: 0,
     
      }, 
      }}
      >

<Tab.Screen name="Home" component={Home}

screenOptions={{
  headerShown: false,
  
}}
   options={{
    tabBarIcon: ({focused }) => (
      <Image source={require('./imagenIcons/homeIcon.png')}
        style={{
          width: 25,
          height: 25,
        
        }}
      />
    ),
    
  }}
/>

      <Tab.Screen name="Calendario" component={Calendario}
      
      options={{
        tabBarIcon: ({ focused }) => (
          <Image source={require('./imagenIcons/calendarioicon.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        ),
    
      }}
    />
     
    

      <Tab.Screen name=" " component={CriarLembrete} options={{
          tabBarIcon: ({ focused }) => (
            <Image source={require('./imagenIcons/addbuton.png')}
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


      <Tab.Screen name="Chat" component={Chat}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image source={require('./imagenIcons/chatIcon.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        ),
      }}
    />


      <Tab.Screen name="Horarios" component={Horarios}
      
      options={{
        tabBarIcon: ({ focused }) => (
          <Image source={require('./imagenIcons/rorarioIcon.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        ),
      }}
    />
 
    </Tab.Navigator>

  );
}
