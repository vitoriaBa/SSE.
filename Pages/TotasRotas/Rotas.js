import { createStackNavigator } from '@react-navigation/stack';



import Login from '../SlidesPages/Login'; 
import Usuario from '../Usuario'; 

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Usuario" component={Usuario} />
      <Stack.Screen name="Login" component={Login} />
    
    </Stack.Navigator>
  );
}