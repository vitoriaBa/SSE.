import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, TextInput, Image,Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


import { firestore } from "../Firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

export default function CriarLembrete({ navigation }) {
  const navi = useNavigation();
  const [fontsLoaded] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
//form 
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [data, setData] = useState('');
  const [cor, setCor] = useState('');
  
  async function addlembrete() {
    try {
      const docRef = await addDoc(collection(firestore, 'LembretePessoais'), {
        titulo: titulo,
        texto: texto,
        data: data,
        cor: selectedColor.cor,
      });
      console.log("flor cadastrado com ID: ", docRef.id);
      Alert.alert("Cadastro", "flor cadastrado com sucesso");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao cadastrar seu lembrete: ", error);
      Alert.alert("Erro", "Erro ao cadastrar seu Lembrete. Por favor, tente novamente.");
    }
  }
  
//separar
  const [selectedColor, setSelectedColor] = useState({
    image: require('../assets/tomate.png'),
    text: 'Tomate',
    cor:'#FF6347',
  });

  const [mostrarCores, setMostrarCores] = useState(false);
  const colors = [
    { text: 'Tomate', image: require('../assets/tomate.png'),  cor:'#FF6347' },
    { text: 'Azul', image: require('../assets/azul.png') ,  cor:'#72A6E3'},
    // Adicionar outras cores 
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setMostrarCores(false);
  };

  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.sair}>
            <TouchableOpacity onPress={() => navi.navigate('Home')} style={styles.button}>
              <Text style={styles.titulo}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inlineTitulo}>
            <Text style={styles.titulo}>Lembretes</Text>
          </View>

          <View style={styles.form}>


            <Text style={styles.texto}>Título:</Text>
            <TextInput
              style={styles.input}
              placeholder="Título do lembrete"
              onChangeText={setTitulo}
              value={titulo}
               />



            <Text style={styles.texto}>Descrição:</Text>
            <TextInput
              style={styles.input}
              placeholder="Texto do lembrete"
              onChangeText={setTexto}
              value={texto}
              />

            <View style={styles.inline}>

              <View style={styles.sob}>


                <Text style={styles.texto}>Hora:</Text>
                <TextInput style={styles.inputmed} 
                placeholder="HH:MM" />
              </View>


              <View style={styles.sob}>



                <Text style={styles.texto}>Data:</Text>
                <TextInput style={styles.inputmed} 
                placeholder="DD/MM/YYYY"
                onChangeText={setData}
              value={data}
                />



              </View>
            </View>

            <Text style={styles.texto}>Cor</Text>
            <TouchableOpacity style={styles.button} onPress={() => setMostrarCores(true)}>
              <View style={styles.inlineView}>
                <Image source={selectedColor.image} style={{ width: 40, height: 40 }} />
                <Text style={styles.texto}>{selectedColor.text}</Text>
              </View>
            </TouchableOpacity>

            {mostrarCores && (
              <View style={styles.texte}>
                {colors.map((color, index) => (
                  <TouchableOpacity key={index} onPress={() => handleColorSelect(color)} style={styles.colorButton}>
                    <View style={styles.inlineView}>
                      <Image source={color.image} style={{ width: 50, height: 50 }} />
                      <Text> {color.text}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <TouchableOpacity onPress={addlembrete}>
              <View style={styles.buttonTop}>
                <Text style={styles.txt}>Criar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  fundo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#206550',
    padding: 0,
    margin: 0,
    position: 'absolute',
  },
  sair:{
   width:300,
   height:50,
   bottom:30,
   flexDirection: 'row-reverse',
   justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#FFFFFF',
    width: 385,
    height: 725,
    borderRadius: 30,
    borderBottomRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 0,
    borderWidth: 10,
    borderColor: '#206550',
    margin: 2,
  },
  container2:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 340,
    height: 660,
    borderRadius: 30,
    borderColor: '#E4D5C7',
    backgroundColor: '#236E57',
  },
  form:{
   margin:30
  },
  input: {
    textAlign: 'center',
    borderRadius: 5,
    margin: 5,
    width: 300,
    height: 50,
    borderBottomWidth:5,
    borderColor:'#95877A',
    backgroundColor:'#E4D5C7',
    borderWidth: 0,
  },
  inputmed: {
    textAlign: 'center',
    borderRadius: 5,
    margin: 5,
    width: 130,
    height: 50,
    borderColor:'#95877A',
    backgroundColor:'#E4D5C7',
    borderWidth: 0,
    borderBottomWidth:5,
  },
  inputpesquisa:{
    textAlign: 'center',
    borderRadius: 5,
    margin: 5,
    width: 200,
    height: 40,
    borderBottomWidth:5,
    borderColor:'#174738',
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
  },
  buttonTop: {
    fontSize: 17,
    fontFamily: 'BrunoAce-Regular',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#174738',
    borderWidth: 0,
    borderBottomWidth:5,
    backgroundColor: '#206550',
    color: '#000000',
    transform: [{ translateY: -5 }],
  },
  button: {
    width: 40,
    height: 40,
    margin: 10,
  },
  inline: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    //backgroundColor: '#236E57',
    width: 300,
    height: 70,
  },
  inline2: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    textAlign:'center',
    //backgroundColor: '#236E57',
    width: 300,
    height: 70,
    
  },
  inlineView:{
    display: 'flex',
    alignItems:'center',
    flexDirection: 'row',
    width: 300,
  },
  inlineTitulo: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    height: 70,
    marginLeft: 60,
  },
  texto: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'BrunoAce-Regular',
    color:'#E4D5C7',
    marginTop:10,
  },
  texto2: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'BrunoAce-Regular',
    color:'#000000',
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'BrunoAce-Regular',
    color:'#E4D5C7',
  },
  texte: {
    justifyContent:'center',
    height: 400,
    width: 250,
    marginBottom:300,
    borderColor: '#174738',
    borderRadius:20,
    backgroundColor: '#E4D5C7',
    zIndex: 10, 
    position: 'absolute', 
    
    left: 30  

  },
});

