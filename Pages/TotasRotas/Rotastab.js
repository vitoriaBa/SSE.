import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
//import{MaterialCommunityIcons}from "@expo/vector-icons";
import {View,StyleSheet,Image,TouchableOpacity } from 'react-native';
 
import Home from "../Home";
import Chat from "../Chat";
import Calendario from "../Calendario";
import Horarios from "../Horarios";
import Teste from "../teste";


const Tab = createBottomTabNavigator();


export default function Rotastab(){
  
  return(
   <Tab.Navigator tabBarOpitions={{showLabel:false}} initialRouteName='Home' screenOptions={{headerShown:false}}>
  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="Calendario" component={Calendario} />

    <Tab.Screen name="Teste" 
    component={Teste}
    options={{
      tabBarIcons: ({focused}) => (
        <Image source={require('./imagenIcons/Logo.png')}></Image>
      ),

        
    }}
    />

  <Tab.Screen name="Chat" component={Chat} />
  <Tab.Screen name="Horarios" component={Horarios} />
  
</Tab.Navigator>
  );

}