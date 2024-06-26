import React from 'react'; 
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet,Image ,ScrollView, TouchableOpacity, FlatList, Alert, Dimensions,ImageBackground } from 'react-native';

import { firestore } from "../Firebase"; 
import { collection, onSnapshot, deleteDoc, doc ,getFirestore,query,where} from "firebase/firestore"; 
import { getAuth,onAuthStateChanged   } from 'firebase/auth';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Home() {

  //responsividade da tela
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const navi = useNavigation();
  const [lembretes, setLembretes] = useState([]);
  
  //"puxa" o id do usuario
  const [authInitialized, setAuthInitialized] = useState(false);
  const [userId, setUserId] = useState(null);
  const auth = getAuth();


//deletar
  async function deletar(id) {
    try {
      await deleteDoc(doc(firestore, "LembretePessoais", id)); 
      Alert.alert("Seu lembrete foi deletado com sucesso.");
    } catch (error) {
      console.error("Erro ao deletar Lembrete:", error);
    }
  }


  //tres pontinhos do lado para as opçoes
  const alertDeletar = (id, titulo, texto, data) =>
    Alert.alert('Deseja excluir ou alterar esse lembrete', '', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
       
      },
      { text: 'Deletar', 
      onPress: () => deletar(id),
      color:'red',
    },
    { text: 'Alterar', 
    onPress: () => navi.navigate('AlterarLembrete', { id, titulo, texto, data }),
      style: 'default',
      color:'green',
    },
    ]);

    //colection lembrete
    /*const userId = auth.currentUser.uid? auth.currentUser.uid : null;
    const auth = getAuth();*/


    //essa parte é para 'achar' o uid
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid);
          setAuthInitialized(true);
        } else {
        
          setUserId(null);
          setAuthInitialized(true);
        }
      });
  
      return () => unsubscribe();
    }, []);
    
    useEffect(() => {
      if (!authInitialized || !userId) return;
  
      const q = query(collection(firestore, 'LembretePessoais'), where('userId', '==', userId));
  
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setLembretes(data);
      });
  
      return () => unsubscribe();
    }, [authInitialized, userId]);


//eu tirei o texto com o nome do
  return (
    <View style={[styles.fundo, { width: windowWidth, height: windowHeight }]}> 
      <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>

<ImageBackground source={require('../assets/fundousuario.png')} style={styles.usuarioContainer}>
<View style={styles.header}>
<Image style={styles.img}  source={require('../assets/LogoBranca.png')} ></Image>
<TouchableOpacity 
        onPress={() => navi.navigate('Usuario')}>
<Image style={styles.img} source={require('../assets/usuario.png')} ></Image>
</TouchableOpacity>
</View>
<Text style={styles.textoususario}  >Olá</Text>

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
                      <Text>{/*Data: */} <Text style={styles.data}> {data ? `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}` : ''}</Text></Text>
                    )}

                    <TouchableOpacity onPress={() => alertDeletar(item.id)}>
                    <MaterialCommunityIcons name="dots-vertical" size={30} color="#000" />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
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
   // justifyContent: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'BrunoAce-Regular',
  
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
    fontFamily: 'BrunoAce-Regular',
  },
  usuarioContainer: {
    width:350,
    height:150,
    margin:20,
    padding:20,
   
  },
  textoususario:{
    fontSize:16,
    margin:4,
    fontFamily: 'BrunoAce-Regular',
    color: '#FFFFFF',
  },
  semanaContainer: {
    // Style your calendar here
  },
  AvisoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    width: 350,
    padding:20,
    height: 200,
    borderWidth: 3,
    borderBottomWidth:10,
    justifyContent: 'space-between',
  },
  Titulo: {
    fontSize:15,
    marginRight:30,
    fontFamily: 'BrunoAce-Regular',
   // fontWeight: 'bold',
  },
  data: {
    fontSize:13,
    color: '#555',
    fontFamily: 'BrunoAce-Regular',
    marginRight:35,
  },
  texto: {
    fontSize:12,
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
  img:{
    width:50,
    height:50,
  }
});
