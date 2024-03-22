import { Text, SafeAreaView, StyleSheet,View,Image,TouchableHighlight,ImageBackground, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useStater,useState } from 'react';

import { useFonts} from 'expo-font';


export default function LoginScreen() {
  
    const[email, setEmail]= useState('');
    const[senha, setSenha] = useState('');
   // const[user, setUser]= useState('');
  
  
    const navi = useNavigation();
 

  let [fontsLoaded, fontError] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

//buton
//const [isPressed, setIsPressed] = useReducer(false);
  return (
    <SafeAreaView style={styles.container}>
<ImageBackground source={require('../assets/fundo1.png')} style={styles.image}>

<View style={styles.cima}>
 
    <Image style={styles.img} source={require('../assets/Logo.png')}></Image>
      
</View>


<View style={styles.containertexto}>

<Text style={styles.titulo}>Login</Text> 


<View style={styles.opicoes}>
 
</View>

    <TextInput
    style={styles.input}
    placeholder="email"
    onChangeText={(email) => setEmail(email)}
    value={email}
    />

 
      <TextInput
    style={styles.input}
    placeholder="Senha"
    onChangeText={(senha) => setSenha(senha)}
    value={senha}
    />

 <View>
 <View style={styles.containerbutton}>
 <TouchableHighlight style={styles.button && styles.buttonHover}
       onPress={() => {
        //setIsPressed(true);
       // setTimeout(() => setIsPressed(false), 100); // Reinicia o estado após 100ms
        navi.navigate('Home');
      }}
      underlayColor={styles.buttonHover.backgroundColor} // Cor de fundo quando pressionado
    >
      <View style={styles.buttonTop}>
        <Text>Entrar</Text>
      </View>
    </TouchableHighlight>
</View>
    </View>
         <Text>Esqueceu sua senha</Text>
</View>

   </ImageBackground>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
   
  },
   image: {
    flex: 1,
    resizeMode: 'cover',

  },
  img:{
    marginTop:50,
    width:200,
    height:210,
  },
  titulo: {
    margin: 10,
    fontSize: 32,
    textAlign: 'center',
    fontFamily:'BrunoAce-Regular',
  },
  input:{
    textAlign:'center',
    borderRadius:10,
    margin:5,
    width:300,
    height:50,
     backgroundColor:'#FFFFFF',
     borderColor:'#BBBBBB',
     borderWidth: 5,
  },
   texto: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'BrunoAce-Regular',
  },
  txt:{
marginLeft:45,
    fontSize: 16,
fontFamily:'BrunoAce-Regular',

  },
  containertexto:{
      flex: 1,
      //marginTop:80,
      //position:'absolute',
    justifyContent: 'center',
       alignItems:'center',
    width:400,
margin:5,
     marginBottom:0
  },
  cima:{
       flex: 1,
    alignItems:'center',
  justifyContent: 'center',
  },

  buttonTop: {
    fontSize: 17,
    fontFamily:'BrunoAce-Regular',
    width:250,
    height:50,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 12, 
    borderWidth: 2,
    borderColor: '#174738', 
    backgroundColor: '#236E57', 
    color: '#000000',
    transform: [{ translateY: -5 }], 
  },
  buttonHover: {
    borderRadius: 12, 
    transform: [{ translateY: -9 }],
  },
 containerbutton:{
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  marginTop:20,
  width:350,
    height:70,
   // backgroundColor: '#e8e8e8', 
 },
  opicoes:{
    textAlign:'center',
    borderRadius:10,
    margin:5,
    width:300,
    height:50,
     backgroundColor:'#FFFFFF',
     borderColor:'#BBBBBB',
     borderWidth: 5,
  }
  
});