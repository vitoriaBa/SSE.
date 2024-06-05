import React from 'react'; 
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList, Alert, Dimensions,ImageBackground } from 'react-native';
import { firestore } from "../Firebase"; 
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const [lembretes, setLembretes] = useState([]);
  
  async function deletar(id) {
    try {
      await deleteDoc(doc(firestore, "LembretePessoais", id)); 
      Alert.alert("Seu lembrete foi deletado com sucesso.");
    } catch (error) {
      console.error("Erro ao deletar Lembrete:", error);
    }
  }

  const alertDeletar = (id) =>
    Alert.alert('Deletar', 'Tem certeza?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => deletar(id) },
    ]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'LembretePessoais'), (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setLembretes(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={[styles.fundo, { width: windowWidth, height: windowHeight }]}> 
      <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>

<ImageBackground source={require('../assets/fundousuario.png')} style={styles.usuarioContainer}>
</ImageBackground>


        <View style={[styles.Avisos, { width: windowWidth }]}>
          <FlatList
            data={lembretes}
            renderItem={({ item }) => {
              // Converter timestamp do Firestore para data legível
              const data = item.data ? new Date(item.data.seconds * 1000) : null;

              return (
                <View style={[styles.AvisoContainer, { borderColor: item.cor }]}>
                 <View style={styles.Titulocontainer}>
                  <Text style={styles.Titulo}>{item.titulo}</Text>
                  {data && (
                      <Text>{/*Data: */} <Text style={styles.data}>{data.toLocaleDateString()}</Text></Text>
                    )}

                    <TouchableOpacity onPress={() => alertDeletar(item.id)}>
                    <MaterialCommunityIcons name="dots-vertical" size={50} color="#206550" />
                    </TouchableOpacity>
                   
                  </View>
                  <Text style={styles.texto}>{/*Texto: */}  <Text style={styles.texto}>{item.texto}</Text></Text>
                  <View style={styles.botaoDeletar}>
                   
                  </View>
                </View>
              );
            }}
          />
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
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height: 750,
    borderRadius: 30,
    borderBottomRadius: 50,
    padding: 0,
    borderWidth: 10,
    borderColor: '#206550',
    margin: 0,
  },
  Titulocontainer: {
    flexDirection: 'row',
  
   // backgroundColor: '#206550',
    justifyContent: 'space-between',
  },
  Avisos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TituloAviso: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#206550',
    width: 200,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    marginRight: 30,
  },
  usuarioContainer: {
    width: 200,
    height:200,
  },
  semanaContainer: {
    // Style your calendar here
  },
  AvisoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: '#000',
    width: 350,
    padding:20,
    height: 200,
    borderWidth: 3,
    borderBottomWidth: 8,
    justifyContent: 'space-between',
  },
  Titulo: {
    fontSize: 26,
    marginRight:30,
    fontFamily: 'BrunoAce-Regular',
    fontWeight: 'bold',
  },
  data: {
    fontSize:18,
    color: '#555',
    marginRight:35,
  },
  texto: {
    fontSize:13,
    fontFamily: 'BrunoAce-Regular',
    ///marginBottom: 16,
  },
  butao: {
    backgroundColor: '#206550', // Button color
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'BrunoAce-Regular',
    color: '#FFF',
    fontWeight: 'bold',
  },
});
