import React, { useState } from 'react';
import { Text, View, TextInput, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function CriarLembrete({ navigation }) {
  const [fontsLoaded] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const [mostrarCores, setMostrarCores] = useState(false);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);

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
      <View style={styles.container2}>
      <View style={styles.container3}>
        <View style={styles.inlineTitulo}>
          <Text style={styles.titulo}>Lembretes</Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <TouchableOpacity style={{backgroundColor:'#236E57',}}><Text style={styles.titulo}>X</Text></TouchableOpacity>
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
                setMostrarCores(true);
              }}>
          
            </TouchableOpacity>
            {mostrarCores && (
             
              <View style={styles.texte}>
              {/*começa a view de dentro*/}  
              
              <View style={styles.inlineView}>
              <TouchableOpacity><Image source={require('../assets/tomate.png')} ></Image></TouchableOpacity><Text style={styles.texto2}>Tomate</Text>
              
              <TouchableOpacity onPress={() => {
                  setMostrarCores(false);
                }}>  
                <Text style={styles.sair}>X</Text></TouchableOpacity>
            
            
                </View>

                <View style={styles.inlineView}>
                <TouchableOpacity><Image source={require('../assets/azul.png')} ></Image></TouchableOpacity><Text style={styles.texto2}>Azul</Text>
                </View>
                 
                <View style={styles.inlineView}>
                <TouchableOpacity><Image source={require('../assets/azul.png')} ></Image></TouchableOpacity><Text style={styles.texto2}>Tangerina</Text>
                </View>


                <View style={styles.inlineView}>
                <TouchableOpacity><Image source={require('../assets/azul.png')} ></Image></TouchableOpacity><Text style={styles.texto2}>Tangerina</Text>
                </View>

                
                <View style={styles.inlineView}>
                <TouchableOpacity><Image source={require('../assets/azul.png')} ></Image></TouchableOpacity><Text style={styles.texto2}>Tangerina</Text>
                </View>


              

              </View>


            )}
            {/*acaba a view de dentro*/}
                <Text  style={styles.txt}>Cor de destaque</Text>
          </View>

          <View style={styles.inline2}>
            <TouchableOpacity
             style={styles.button}
                  onPress={() => {
                    setMostrarUsuarios(true);
                  }}>

                    </TouchableOpacity>
                   {mostrarUsuarios && (

              <View style={styles.texte}>

                  <TouchableOpacity onPress={() => {
                  setMostrarUsuarios(false);
                }}>  
                <Text style={styles.sair}>X</Text></TouchableOpacity>

                  
               <TextInput
                style={styles.inputpesquisa}
              placeholder="Pesquisar Membro"
               ></TextInput>   
               <TouchableOpacity>
                <Text style={styles.sair}> ?</Text>
                  
                  </TouchableOpacity>

                
                 
                </View>
                )}   
            {/*<Text>Adicionar convidado</Text>*/}
            <Text  style={styles.txt}>Adicionar um Usuario</Text>
          </View>



          
        <TouchableOpacity onPress={enviarlembretes}>
          <View style={styles.buttonTop}>
            <Text style={styles.txt}>Criar</Text>
          </View>
        </TouchableOpacity>
        </View>
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
   fontSize:30,
   marginLeft:90,
   fontFamily:'BrunoAce-Regular',
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
    backgroundColor: '#FFFFFF',
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
  },
  texto2: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'BrunoAce-Regular',
    color:'#000000',
  },
  titulo: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'BrunoAce-Regular',
    color:'#E4D5C7',
  },
  texte: {
    justifyContent:'center',
    height: 300,
    width: 250,
    marginBottom:300,
    marginLeft:0,
    marginRight:200,
    borderColor: '#174738',
    borderRadius:20,
    backgroundColor: '#E4D5C7',
  },
});

