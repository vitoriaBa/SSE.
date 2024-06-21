import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import { firestore } from "../Firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Usuario() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navi = useNavigation();
  const [dados, setDados] = useState([]);
  const [authInitialized, setAuthInitialized] = useState(false);
  const [userId, setUserId] = useState(null);
  const auth = getAuth();

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

    const q = query(collection(firestore, 'dadosAluno'), where('userId', '==', userId));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setDados(data);
    });

    return () => unsubscribe();
  }, [authInitialized, userId]);

  // Função para converter timestamp do Firestore em data legível
  const formatarData = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate(); // Converte o timestamp em um objeto Date
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={[styles.fundo, { width: windowWidth, height: windowHeight }]}>
      <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
        <View style={[styles.Avisos, { width: windowWidth }]}>
          <ImageBackground source={require('../assets/fundoTela.png')} style={styles.usuarioContainer}>
            <TouchableOpacity onPress={() => navi.navigate('Home')}>
              <Image style={styles.img} source={require('../assets/setaE.png')} />
            </TouchableOpacity>
            <View style={styles.imgC}>
              <Image style={styles.usuarioImg} source={require('../assets/usuarioG.png')} />
            </View>
          </ImageBackground>

          <FlatList
            data={dados}
            renderItem={({ item }) => {
              return (
                <View style={[styles.AvisoContainer, { borderColor: item.cor }]}>
                  <ImageBackground style={styles.cartao} source={require('../assets/fundocartao.png')}>
                    <Image style={styles.logo} source={require('../assets/LogoBranca.png')} />
                    <Text style={styles.dadoscartao}>{item.dadoscartao}</Text>
                  </ImageBackground>

                  <View style={styles.dadoscontainer}>
                    <Text style={styles.Titulo}> Nome: </Text>
                    <Text style={styles.texto}>{item.nome}</Text>

                    <Text style={styles.Titulo}> Instituição de Ensino: </Text>
                    <Text style={styles.texto}>{item.instituicao}</Text>

                    <Text style={styles.Titulo}> Curso/Série/Ensino: </Text>
                    <Text style={styles.texto}>{item.cursos}</Text>

                    <Text style={styles.Titulo}> Matrícula:</Text>
                    <Text style={styles.texto}>{item.matricula}</Text>

                    <Text style={styles.Titulo}> Data de Nascimento:</Text>
                    <Text style={styles.texto}>{formatarData(item.dataNct)}</Text>

                    <Text style={styles.Titulo}> Gênero: </Text>
                    <Text style={styles.texto}>{item.genero}</Text>
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
  Titulo: {
    fontSize: 16,
    marginBottom: 10,
    color: '#848484',
    fontFamily: 'BrunoAce-Regular',
  },
  texto: {
    fontSize: 18,
    color: '#206550',
    marginBottom: 10,
    marginLeft: 6,
    fontFamily: 'BrunoAce-Regular',
  },
  dadoscontainer: {
    margin: 30,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  usuarioContainer: {
    width: 350,
    height: 80,
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#206550',
  },
  imgC: {
    alignItems: 'center',
    width: 330,
  },
  img: {
    width: 38,
    height: 45,
  },
  logo: {
    width: 60,
    height: 65,
  },
  usuarioImg: {
    width: 90,
    height: 100,
  },
  cartao: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 50,
    width: 300,
    height: 170,
    backgroundColor: '#206550',
    borderRadius: 10,
    padding: 20,
    marginTop: 50,
  },
  dadoscartao: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
    fontFamily: 'BrunoAce-Regular',
  },
});
