import { Text, SafeAreaView, StyleSheet,View,Image, ImageBackground,TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import React, { useState } from 'react';

import { useFonts} from 'expo-font';


//esse seria o pai
export default function TelaInicial() {
  const navi = useNavigation();
 
  let [fontsLoaded, fontError] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

//buton
   
  //const [isPressed, setIsPressed] = (false);

  return (
    <SafeAreaView style={styles.container}>
<ImageBackground source={require('../assets/fundo1.png')} style={styles.image}>
<View style={styles.cima}>
 
    <Image style={styles.img} source={require('../assets/frame1.png')}></Image>
      
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

<View style={styles.Banimation1}></View>
<View style={styles.Bolinha}></View>
<View style={styles.Bolinha}></View>


</View>

<View style={styles.containerbutton}>
 <TouchableHighlight style={styles.button && styles.buttonHover}
       onPress={() => {
       // setIsPressed(true);
       // setTimeout(() => setIsPressed(false), 100); 
        navi.navigate('Tela2Screen');
      }}
      underlayColor={styles.buttonHover.backgroundColor} >
      <View style={styles.buttonTop}>
        <Text style={styles.txt}>Próximo</Text>
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
    fontSize: 20,
fontFamily:'BrunoAce-Regular',
color:'#e8e8e8',

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

  buttonTop: {
    fontSize: 17,
    fontFamily:'BrunoAce-Regular',
    width:250,
    height:50,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 12, 
    borderWidth: 5,
    borderColor: '#174738', 
    backgroundColor: '#206550', 
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
},
Banimation1:{
  width:70,
  borderRadius:50,
  height:20,
  backgroundColor:'#174738',
}
 
  
});