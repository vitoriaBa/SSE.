import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView,TouchableOpacity, FlatList,  } from 'react-native';


export default function Home({ route }) {
  const { formlembrete } = route.params || { formlembrete: { titulo: '', texto: '' } };
  const [avisos, setAvisos] = useState(formlembrete ? [formlembrete] : []);
  const [novoLembrete, setNovoLembrete] = useState({ titulo: '', texto: '' });

  
  useEffect(() => {
    if (formlembrete.titulo !== '') {
      setAvisos([...avisos, formlembrete]);
    }
  }, [formlembrete]);


 

  
  


  const renderItem = ({ item }) => (
    <View style={styles.AvisoContainer}>
      <View style={styles.Titulocontainer}>
        <Text style={styles.Titulo}>{item.titulo}</Text>
        <Text style={styles.data}>{item.data}</Text>
      </View>
      <Text style={styles.texto}>{item.texto}</Text>
      <TouchableOpacity style={styles.butao}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
        <View style={styles.usuarioContainer}>
          <Text style={styles.texto}>Olá Jefferson L. Sousa</Text>
        </View>


        <View style={styles.semanaContainer}></View>



<ScrollView style={styles.Scroll}>

        <View style={styles.Avisos}>
          <Text style={styles.TituloAviso}>Aviso Principal</Text>
          <FlatList
            data={avisos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        </ScrollView>



      
      </View>
    </View>
  );
};



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
    backgroundColor: '#FFFFFF', 
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


