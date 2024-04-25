import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function CriarLembrete({ navigation }) {
  const [fontsLoaded] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const [mostrarTexto, setMostrarTexto] = useState(false);

  const [formlembrete, setFormlembrete] = useState({
    titulo: '',
    texto: '',
  });

  const enviarlembretes = () => {
    navigation.navigate('Home', { formlembrete });
  };

  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
        <View style={styles.inlineTitulo}>
          <Text style={styles.titulo}>Lembretes</Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.titulo}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Text style={styles.texto}>Titulo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Titulo do lembrete"
            value={formlembrete.titulo}
            onChangeText={(text) => setFormlembrete({ ...formlembrete, titulo: text })}
          />
          <View style={styles.bloco}>
            <Text style={styles.texto}>Descrição:</Text>
            <TextInput
              style={styles.input}
              placeholder="Texto do lembrete"
              value={formlembrete.texto}
              onChangeText={(text) => setFormlembrete({ ...formlembrete, texto: text })}
            />
          </View>
          <View style={styles.inline}>
            <View style={styles.sob}>
              <Text style={styles.texto}>Data:</Text>
              <TextInput
                style={styles.inputmed}
                placeholder="HH:MM"
                type={'datetime'}
                options={{
                  format: 'HH:mm',
                }}
              />
            </View>
            <View style={styles.sob}>
              <Text style={styles.texto}>Data:</Text>
              <TextInput
                style={styles.inputmed}
                placeholder="DD/MM/YYYY"
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY',
                }}
              />
            </View>
          </View>
          <View style={styles.inline2}>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setMostrarTexto(true);
              }}>
          
            </TouchableOpacity>
            {mostrarTexto && (
              <View style={styles.texte}>
                <Text>AAAAAAAAAAAAA</Text>
                <TouchableOpacity
                 onPress={() => {
                  setMostrarTexto(false);
                }}
                >
                  <Text>Sair</Text>
                </TouchableOpacity>
              </View>
            )}
                <Text>Cor de destaque</Text>
          </View>


          <View style={styles.inline2}>
            <TouchableOpacity
             style={styles.button}
                  onPress={() => {
                    setMostrarTexto(true);
                  }}>
           
            </TouchableOpacity>
            <Text>Adicionar convidado</Text>
          </View>



        </View>
        <TouchableOpacity onPress={enviarlembretes}>
          <View style={styles.buttonTop}>
            <Text style={styles.txt}>Criar</Text>
          </View>
        </TouchableOpacity>
        
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
  input: {
    textAlign: 'center',
    borderRadius: 10,
    margin: 5,
    width: 300,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#BBBBBB',
    borderWidth: 5,
  },
  inputmed: {
    textAlign: 'center',
    borderRadius: 10,
    margin: 5,
    width: 130,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#BBBBBB',
    borderWidth: 5,
  },
  buttonTop: {
    fontSize: 17,
    fontFamily: 'BrunoAce-Regular',
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#174738',
    backgroundColor: '#236E57',
    color: '#000000',
    transform: [{ translateY: -5 }],
  },
  button: {
    width: 40,
    height: 40,
    margin: 10,
    borderColor: '#174738',
    backgroundColor: '#FFFFFF',
  },
  inline: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    backgroundColor: '#236E57',
    width: 300,
    height: 70,
  },
  inline2: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#236E57',
    width: 300,
    height: 70,
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
  },
  titulo: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'BrunoAce-Regular',
  },
  texte: {
    height: 200,
    width: 300,
    borderColor: '#174738',
    backgroundColor: '#FFFFFF',
  },
});

