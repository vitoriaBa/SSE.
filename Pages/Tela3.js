import { Text, SafeAreaView, StyleSheet,View,Image,Button, ImageBackground,TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import React, { useState } from 'react';

import { useFonts} from 'expo-font';


//esse seria o pai
export default function Tela2Screen() {
  const navi = useNavigation();
 
  let [fontsLoaded, fontError] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

//buton
   
  //const [isPressed, setIsPressed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
<ImageBackground source={require('../assets/fundo1.png')} style={styles.image}>
<View style={styles.cima}>
 
    <Image style={styles.img} source={require('../assets/frame3.png')}></Image>
      
</View>


<View style={styles.containertexto}>

<Text style={styles.titulo}>
      PROTEÇÃO E SEGURANÇA
      </Text> 

       <Text style={styles.texto}>
      Para uma maior segurança no estabelecimento educacional.
      </Text>

 <View>


 <View style={styles.bolinhasContainer}>

<View style={styles.Bolinha}></View>
<View style={styles.Bolinha}></View>
<View style={styles.Bolinha}></View>


</View>

<View style={styles.containerbutton}>
 <TouchableHighlight style={styles.button && styles.buttonHover}
       onPress={() => {
       // setIsPressed(true);
       // setTimeout(() => setIsPressed(false), 100); 
        navi.navigate('LoginScreen');
      }}
      underlayColor={styles.buttonHover.backgroundColor} 
    >
      <View style={styles.buttonTop}>
        <Text>Próximo</Text>
      </View>
    </TouchableHighlight>


    <TouchableHighlight style={styles.button && styles.buttonHover}
       onPress={() => {
        //setIsPressed(true);
        //setTimeout(() => setIsPressed(false), 100);
        navi.navigate('Tela2Screen');
      }}
      underlayColor={styles.buttonHover.backgroundColor} 
    >
      <View style={styles.buttonTop2}>
        <Text>Voltar</Text>
      </View>
    </TouchableHighlight>
</View>
 

    </View>

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
    width:400,
    height:400,
  },
  titulo: {
    margin: 24,
    fontSize: 32,
    textAlign: 'center',
    fontFamily:'BrunoAce-Regular',
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
    justifyContent: 'center',
       alignItems:'center',
    width:400,
    marginTop:150,
     marginBottom:0
  },
  cima:{
       flex: 1,
    alignItems:'center',
    marginTop:20,
  justifyContent: 'center',
  },

 button: {
    borderRadius: 12, 
    backgroundColor: '#236E57',
    borderColor: '#174738',
    fontSize: 17,
    fontFamily:'BrunoAce-Regular',
  },
  buttonTop: {
    width:150,
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
  buttonTop2: {
    width:150,
    height:50,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 12, 
    borderWidth: 2,
    borderColor: '#174738', 
    backgroundColor: '#FFFFFF', 
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
  flexDirection:'row',
  justifyContent:'space-around',
  marginTop:20,
  width:350,
    height:70,
   backgroundColor: '#e8e8e8', 
 },
 bolinhasContainer:{
  flexDirection:'row',
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  justifyContent:'space-evenly',
backgroundColor: '#e8e8e8',
  marginTop:20,
  width:350,
    height:40,
},
 Bolinha:{
  width:20,
  borderRadius:50,
  height:20,
  backgroundColor:'#5D3587',
}
 
  
});