import React from 'react'; 
import { useState,useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView,TouchableOpacity, FlatList,Alert,Dimensions   } from 'react-native';
import { firestore } from "../Firebase"; 
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const [dados, setDados] = useState([]);
  
 

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'dadosAluno'), (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setDados(data);
    });

    return () => unsubscribe();
  }, []);

  
  


  return (
    <View style={[styles.fundo, { width: windowWidth, height:windowHeight }]}> 
    <View style={[styles.container ,{ width: windowWidth,height:windowHeight}]}>
      <View style={[styles.Avisos ,{ width: windowWidth}]} >

      

      <FlatList
        data={dados}
        renderItem={({ item }) => {
          return (
           
            <View style={[styles.AvisoContainer, { borderColor: item.cor }]}>

            
     <View style={styles.dadoscontainer}>
     <Text style={styles.Titulo}> Nome: 
     <Text style={styles.texto}>{item.nome}</Text></Text>
    
    <Text style={styles.Titulo}>Instituição de Ensino: 
    <Text style={styles.texto}>{item.Instituicao}</Text></Text>             
    
    <Text style={styles.data}> Curso/Série/Ensino: 
    <Text style={styles.texto}>{item.cursos}</Text></Text>
              
                <Text style={styles.texto}> Matrícula: <Text style={styles.texto}>{item.matricula}</Text></Text>
                <Text style={styles.texto}> Data de Nacimento: <Text style={styles.texto}>{item.dataNct}</Text></Text>
               
                </View>
                          {/* close-thick */ }

              

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

 Titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 14,
    marginBottom: 16,
  },
  dadoscontainer:{
    justifyContent: 'center',
    flexDirection: 'column',
  }


 
});


