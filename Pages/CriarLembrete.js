import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Alert, Dimensions, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { firestore } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CriarLembrete({ navigation }) {
  const navi = useNavigation();
  const [fontsLoaded] = useFonts({
    'BrunoAce-Regular': require('../assets/fonts/BrunoAce-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [data, setData] = useState(new Date());
  const [modo, setModo] = useState('data');
  const [show, setShow] = useState(false);
  const [textodata, setTextodata] = useState('Sem Data Colocada');

  const mudar = (event, selecionaData) => {
    const atualData = selecionaData || data;
    
    setData(atualData);

    let tempData = new Date(atualData);
    let fData = tempData.getDate() + '/' + (tempData.getMonth() + 1) + '/' + tempData.getFullYear();
    let fTime = "Horas: " + tempData.getHours() + 'minutos ' + tempData.getMinutes();
    setTextodata(fData + '\n' + fTime);

    console.log(fData + '(' + fTime + ')');
  }

  const showModo = atualData => {
    setShow(true);
    setModo(atualData);
  }

  async function addlembrete() {
    try {
      const docRef = await addDoc(collection(firestore, 'LembretePessoais'), {
        titulo: titulo,
        texto: texto,
        data: data,
        cor: selectedColor.cor,
      });
      console.log("lembrete cadastrado com ID: ", docRef.id);
      Alert.alert("Cadastro", "Seu lembrete foi criado com sucesso");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao cadastrar seu lembrete: ", error);
      Alert.alert("Erro", "Erro ao cadastrar seu Lembrete. Por favor, tente novamente.");
    }
  }

  const [selectedColor, setSelectedColor] = useState({
    image: require('../assets/tomate.png'),
    text: 'Tomate',
    cor: '#FF6347',
  });

  const [mostrarCores, setMostrarCores] = useState(false);
  const colors = [
    { text: 'Tomate', image: require('../assets/tomate.png'), cor: '#FF6347' },
    { text: 'Azul', image: require('../assets/azul.png'), cor: '#72A6E3' },
    { text: 'Banana', image: require('../assets/banana.png'), cor: '#FFE866' },
    { text: 'Uva', image: require('../assets/uva.png'), cor: '#8145E3' },
    { text: 'Tangerina', image: require('../assets/tangerina.png'), cor: '#DD4124' },
    { text: 'Manjericão', image: require('../assets/manjericao.png'), cor: '#4A8740' },
    { text: 'lavanda', image: require('../assets/lavanda.png'), cor: '#9889F4' },
    // Adicionar outras cores 
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setMostrarCores(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navi.navigate('Home')} style={styles.closeButton}>
          <MaterialCommunityIcons name="close-thick" size={40} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Lembretes</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Título:</Text>
        <TextInput
          style={styles.input}
          placeholder="Título do lembrete"
          onChangeText={setTitulo}
          value={titulo}
        />

        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
          placeholder="Texto do lembrete"
          onChangeText={setTexto}
          value={texto}
        />

        <View style={styles.dateTimeContainer}>
          <Text style={styles.label}>Data:</Text>
          <TouchableOpacity style={styles.dateTimeButton} onPress={() => showModo('data')}>
            <Text>{textodata}</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID='dateTime'
              value={data}
              mode={modo}
              is24Hour={true}
              display='default'
              onChange={mudar}
            />
          )}
        </View>

        <Text style={styles.label}>Cor:</Text>
        <TouchableOpacity style={styles.colorButton} onPress={() => setMostrarCores(true)}>
          <View style={styles.colorSelect}>
            <Image source={selectedColor.image} style={{ width: 40, height: 40 }} />
            <Text style={styles.colorText}>{selectedColor.text}</Text>
          </View>
        </TouchableOpacity>
        {mostrarCores && (
          <View style={styles.colorPicker}>
            {colors.map((color, index) => (
              <TouchableOpacity key={index} onPress={() => handleColorSelect(color)} style={styles.colorButton}>
                <View style={styles.colorSelect}>
                  <Image source={color.image} style={{ width: 30, height: 30, marginBottom: 20 }} />
                  <Text style={styles.colorText}>{color.text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TouchableOpacity onPress={addlembrete}>
          <View style={styles.submitButton}>
            <Text style={styles.submitText}>Criar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#206550',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    marginRight: 'auto',
  },
  headerText: {
    fontSize: 35,
    fontFamily: 'BrunoAce-Regular',
    color: '#FFFFFF',
  },
  form: {},
  label: {
    fontSize: 16,
    color: '#E4D5C7',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#E4D5C7',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateTimeButton: {
    backgroundColor: '#E4D5C7',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  colorButton: {
    marginBottom: 20,
  },
  colorSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorText: {
    marginLeft: 10,
    color: '#E4D5C7',
  },
  colorPicker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#206550',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 17,
    fontFamily: 'BrunoAce-Regular',
    color: '#000000',
  },
});
