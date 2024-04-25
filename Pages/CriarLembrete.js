import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import {Text,View, SafeAreaView,Textarea, TextInput,StyleSheet,Image,TouchableOpacity } from 'react-native';
import {useState, useEffect } from 'react';

 export default function CriarLembrete({navigation}){

    const [formlembrete, setFormlembrete] = useState({
        titulo: '',
        texto: '',
      });

      
      const enviarlembretes = () => {
        //passando os dados do formulário para os lembretes

        navi.navigate('Home', { formlembrete });
      };

    const navi = useNavigation();
  return (
    <View style={styles.fundo}>

    <View style={styles.container}>

      <Text style={styles.titulo}>Lembretes</Text>
    
<TouchableOpacity   
 //onPress={fecharjanela}
 >
   <View style={styles.button}>

     <Text style={styles.txt}>fecharjanela</Text>

   </View>

 </TouchableOpacity>


    <View style={styles.form}>

    <Text style={styles.texto}>Titulo:</Text>

    <TextInput
    style={styles.input}
    placeholder="Titulo do lembrete"
    value={formlembrete.titulo}
        onChangeText={(text) => setFormlembrete({ ...formlembrete, titulo: text })}
    />

    <View  style={styles.bloco}>


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
 // value={formlembrete.texto}
   // onChangeText={(hora) => setFormlembrete({ ...formlembrete, hora: inter  })}
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
  //  value={formlembrete.texto}
   // onChangeText={(text) => setFormlembrete({ ...formlembrete, data: text })}
>
  </TextInput>
  </View>

  


</View>

<View style={styles.inline2}>

<TouchableOpacity
style={styles.button}
  onPress={() => {
   <View style={styles.texte}>

    </View>
    
  }}>
  </TouchableOpacity>
  <Text>Cor de destaque</Text>
    </View>




<View style={styles.inline2}>
<TouchableOpacity
style={styles.button}
  onPress={() => {
   <View style={styles.texte}>

    </View>
  }}>
</TouchableOpacity>
<Text>Adicionar convidado</Text>
</View>


</View>


<TouchableOpacity   
 onPress={enviarlembretes}
 >
   <View style={styles.buttonTop}>
     <Text style={styles.txt}>Criar</Text>
   </View>
 </TouchableOpacity>



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
    margin:2,

  },

  input:{
    textAlign:'center',
    borderRadius:10,
    margin:5,
    width:300,
    height:50,
     backgroundColor:'#FFFFFF',
     borderColor:'#BBBBBB',
     borderWidth: 5,
  },
  inputmed:{
    textAlign:'center',
    borderRadius:10,
    margin:5,
    width:130,
    height:50,
     backgroundColor:'#FFFFFF',
     borderColor:'#BBBBBB',
     borderWidth: 5,
  },
  buttonTop: {
    fontSize: 17,
    fontFamily:'BrunoAce-Regular',
    width:250,
    height:50,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 12, 
    borderWidth: 2,
    borderColor: '#174738', 
    backgroundColor: '#236E57', 
    color: '#000000',
    transform: [{ translateY: -5 }], 
  },
  button:{
    width:40,
    height:40,
    margin:10,
    borderColor: '#174738', 
    backgroundColor: '#FFFFFF', 
  },
  inline:{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    backgroundColor: '#236E57', 
    width:300,
      height:70,
    
   },

   inline2:{
    display: 'flex', 
    alignItems: 'center', 
    flexDirection:'row',
    backgroundColor: '#236E57', 
    width:300,
      height:70,
   },

  texte:{
    height:200,
    width:300,
    borderColor: '#174738', 
    backgroundColor: '#236E57', 
  }
 
});

