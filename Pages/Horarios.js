import React from 'react'; 
import {Text,View, SafeAreaView, StyleSheet,TextInput,Image,TouchableOpacity } from 'react-native';

import { useNavigation} from '@react-navigation/native';


 export default function Horarios({route}){
  const navi = useNavigation();
  
  return (
    <View style={styles.fundo}>
    <View style={styles.container}>
      
      <View style={styles.containerTitulo}>
      <View style={styles.inline}>
        <TouchableOpacity style={styles.butonTitulo}
       onPress={() => navi.navigate('Home')}
        >
          <Image style={styles.img} source={require('../assets/tomate.png')}></Image>
        </TouchableOpacity>

        <Text style={styles.Titulo}>Horários</Text>

        <TouchableOpacity style={styles.butonTitulo}>
          {/*imagem do usuario*/}
        <Image style={styles.img} source={require('../assets/azul.png')}></Image>
         </TouchableOpacity>
         </View>
      </View>


      <View style={styles.form}>
        
            <Text style={styles.texto}>Título:</Text>
            <TextInput
              style={styles.input}
              value='Desenvolvimento de sistemas'
            
            />


<View style={styles.inline}>


            <View style={styles.sob}>
              <Text style={styles.texto}>Horario:</Text>
              <TextInput
                style={styles.inputmed}
                value='Noite'
              />
            </View>
            <View style={styles.sob}>


              <Text style={styles.texto}>Modulo:</Text>
              <TextInput
                style={styles.inputmed}
                value='3'
              />
            </View>
          </View>
          <View style={styles.inline}>
          <TouchableOpacity style={styles.dias} ><Text style={styles.txt}>Seg</Text></TouchableOpacity>
          <TouchableOpacity style={styles.dias} ><Text style={styles.txt}>Ter</Text></TouchableOpacity>
          <TouchableOpacity style={styles.dias} ><Text style={styles.txt}>Qua</Text></TouchableOpacity>
          <TouchableOpacity style={styles.dias} ><Text style={styles.txt}>Qui</Text></TouchableOpacity>
          <TouchableOpacity style={styles.dias} ><Text style={styles.txt}>Sex</Text></TouchableOpacity>

            </View>




            {/*tabela*/}

          <View style={styles.tabelahorarios}> 

          </View>

     </View>
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
 
  usuarioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    position:'relative',
  },

 Titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  texto: {
    fontSize: 14,
    marginTop:12,
    marginLeft:12,
  },

  input: {
    textAlign: 'center',
    borderRadius: 5,
    margin: 5,
    width: 300,
    height: 50,
    borderBottomWidth:5,
    borderColor:'#174738',
    backgroundColor:'#206550',
    borderWidth: 0,
  },
  inputmed: {
    textAlign: 'center',
    borderRadius: 5,
    margin: 5,
    width: 130,
    height: 50,
    borderColor:'#174738',
    backgroundColor:'#206550',
    borderWidth: 0,
    borderBottomWidth:5,
  },
  tabelahorarios:{
    borderRadius: 30,
    margin: 5,
    width: 300,
    height: 300,
    borderBottomWidth:10,
    borderColor:'#95877A',
    backgroundColor:'#E4D5C7',
    borderWidth: 0,
  },
  dias:{
    marginTop:10,
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    width: 50,
    height: 50,
    borderColor:'#95877A',
    backgroundColor:'#E4D5C7',
    borderWidth: 0,
    borderBottomWidth:5,
  },
  inline: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: '#236E57',
    width: 300,
    height: 70,
  
  },
  containerTitulo:{
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#236E57',
    borderRadius: 20,
    width: 340,
    height: 70,
  },
  butonTitulo:{
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    width: 30,
    height: 30,
    borderColor:'#174738',
    backgroundColor:'#236E57',
    borderWidth: 0,
    borderBottomWidth:5,
  }
});

