import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView,TouchableOpacity, FlatList,Alert,Dimensions   } from 'react-native';
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
    <View style={[styles.fundo, { width: windowWidth, height:windowHeight }]}> 
    <View style={[styles.container ,{ width: windowWidth}]}>
      <View style={[styles.Avisos ,{ width: windowWidth}]} >

      

      <FlatList
        data={lembretes}
        renderItem={({ item }) => {
          return (
           
            <View style={[styles.AvisoContainer, { borderColor: item.cor }]}>

            
     <View style={styles.Titulocontainer}>
                  <Text style={styles.Titulo}> titulo: <Text style={styles.texto}>{item.titulo}</Text></Text>
                 
                  <Text style={styles.data}> Data: <Text style={styles.texto}>{item.data}</Text></Text>
                </View>
                <Text style={styles.texto}> texto: <Text style={styles.texto}>{item.texto}</Text></Text>
          

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
    </View>
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
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'#FFFFFF',
 
    height:750,
    borderRadius:30,
    borderBottomRadius:50,
    
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
    backgroundColor:'#FFFFFF',
    borderRadius: 18,
    
    marginBottom: 16,
    shadowColor: '#000',
    width:350,
    height:200,
    borderWidth:3,
    borderBottomWidth:8,

    justifyContent: 'space-between',

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


