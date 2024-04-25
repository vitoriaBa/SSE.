import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import {Text,View, SafeAreaView, TextInput,StyleSheet,Image,TouchableOpacity } from 'react-native';
import {useState, useEffect } from 'react';

import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

 export default function CriarLembrete({navigation}){
  const [value, setValue] = React.useState<Dayjs | null>(null);
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
    

    <View style={styles.form}>
    <TextInput
    style={styles.input}
    placeholder="Titulo do lembrete"
    value={formlembrete.titulo}
        onChangeText={(text) => setFormlembrete({ ...formlembrete, titulo: text })}
    />

<TextInput
    style={styles.input}
    placeholder="Texto do lembrete"
    value={formlembrete.texto}
        onChangeText={(text) => setFormlembrete({ ...formlembrete, texto: text })}
    />

<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>

<TouchableOpacity   
 onPress={enviarlembretes}
 >
   <View style={styles.buttonTop}>
     <Text style={styles.txt}>Criar</Text>
   </View>
 </TouchableOpacity>

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



 
});

