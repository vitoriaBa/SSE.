import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView,TouchableOpacity, FlatList,Alert  } from 'react-native';
import { firestore } from "../Firebase"; 
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {

 
  const [lembretes, setLembretes] = useState([]);

 
  async function deletar(id) {
    try {
      await deleteDoc(doc(firestore, "LembretePessoais", id)); 
      Alert.alert("Seu lembrete foi deletado com sucesso.");
    } catch (error) {
      console.error("Erro ao deletar Lembrete:", error);
    }
  }

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
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Lista de encomendas de flores</Text>
      </View>

      <FlatList
        data={lembretes}
        renderItem={({ item }) => {
          return (
           
            <View style={[styles.AvisoContainer, { backgroundColor: item.cor }]}>

            
                <View style={styles.itens}>
                  <Text style={styles.texto}> titulo: <Text style={styles.texto}>{item.titulo}</Text></Text>
                  <Text style={styles.texto}> texto: <Text style={styles.texto}>{item.texto}</Text></Text>
                  <Text style={styles.texto}> Data: <Text style={styles.texto}>{item.data}</Text></Text>
                
                </View>
          

              <View style={styles.botaoDeletar}>
                <TouchableOpacity onPress={() => deletar(item.id)}>
                  <MaterialCommunityIcons name="delete-empty" size={30} color="#fff" />
                </TouchableOpacity>
              </View>

            </View>
          );
        }}
      />
      
    </View>
   
   
  );
}



const styles = StyleSheet.create({
 fundo:{
  justifyContent: 'center',
  alignItems:'center',
  backgroundColor:'#206550',
  padding: 0,
  margin:0,
  position:'absolute',
},

  container: {
    display:'flex',
    backgroundColor:'#FFFFFF',
    width:385,
    height:725,
    borderRadius:30,
    borderBottomRadius:50,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    padding: 0,
    borderWidth:10,
    borderColor:'#206550',
    margin:0,

  },
  Titulocontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Avisos:{
    justifyContent: 'center',
  alignItems:'center',
   //backgroundColor:'#000',
   width:400,
  },
  TituloAviso:{
    justifyContent: 'center',
  alignItems:'center',
  textAlign:'center',
  color:'#FFFFFF',
backgroundColor:'#206550',
width:200,
borderTopLeftRadius:100,
borderTopRightRadius:100,
marginRight:30,
  },
  usuarioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    position:'relative',
  },

  semanaContainer: {
    // Style your calendar here
  },
  AvisoContainer: {
  
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    width:350,
    height:200,
    borderWidth:3,
    borderBottomWidth:8,
    borderColor:'#206550',
    justifyContent: 'space-between',
    marginRight:35,
  },
 Titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 data: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  texto: {
    fontSize: 14,
    marginBottom: 16,
  },


  butao: {
    backgroundColor: '#206550', // Button color
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

 
});


