import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
//import{MaterialCommunityIcons}from "@expo/vector-icons";

import Home from "../Home";


const Tab = createBottomTabNavigator();

export default function Rotastab(){
  
  return(
   <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
  <Tab.Screen name="Home" component={Home} />
  
</Tab.Navigator>
  );

}