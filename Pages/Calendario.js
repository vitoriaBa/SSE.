import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity,Dimensions} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule, } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { collection, onSnapshot} from "firebase/firestore"; 
import { firestore } from "../Firebase"; 



LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Decembro'
  ],
  monthNamesShort: ['jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dec.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: "hoje"
};
LocaleConfig.defaultLocale = 'br';

export default function Calendario() {
 
   


  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    return (
      <View style={[styles.fundo, { width: windowWidth, height: windowHeight }]}> 
      <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>

      <Agenda
      items={{
    
        '2024-06-06': [{name: 'Prova', data:'Prova de Geografia'}],

        '2024-06-07': [{name: 'Avaliação', data:'Avaliação de Matematica estudar a tabuada'}],
        '2024-06-07': [{name: 'Atividade', data:'Atividade livre'}],
 
      }}
        theme={{calendarBackground: '#206550', agendaKnobColor: '#206550'}}
      renderItem={(item, isFirst) => (
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemTitulo}>{item.name}</Text>
          <Text style={styles.itemText}>{item.data}</Text>
        </TouchableOpacity>
      )}
    />
    </View>
    </View>

    );

  }

/*  loadItems = () => {
    const unsubscribe = onSnapshot(collection(firestore, 'LembretePessoais'), (querySnapshot) => {
      const items = {};
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("Data do documento:", data);
  
        const timestamp = data.data; // Acessando diretamente o campo 'data'
        const date = timestamp.toDate(); // Convertendo para uma data JavaScript
        console.log("Data convertida:", date);
  
        if (typeof this.formatDate === 'function') {
          const formattedDate = this.formatDate(date); // Chamando a função formatDate corretamente
          console.log("Data formatada:", formattedDate);
          
          if (!items[formattedDate]) {
            items[formattedDate] = [];
          }
  
          items[formattedDate].push({
            name: data.titulo,
            height: 50,
            day: formattedDate
          });
        } else {
          console.error("A função formatDate não está definida corretamente no escopo da classe.");
        }
      });*/
  
     // console.log("Itens:", items);
  
     /* this.setState({
        items: items
      });
    });*/
  
    //return () => unsubscribe();
 // };
  
 /*formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Os meses começam do zero
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }*/





     /* const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  };*/

 /* renderDay = (day) => {
    if (day) {
      return <Text style={styles.customDay}>{day.getDay()}</Text>;
    }
    return <View style={styles.dayItem}/>;
  };
*/
 /* renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 18 : 14;
    const color = isFirst ? 'black' : 'black';

    console.log("Item de reserva:", reservation);

    return (
      <TouchableOpacity
        
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };*/



 /* renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }*/


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
      justifyContent: 'center',
     // alignItems: 'center',
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
    item: {
      backgroundColor: '#E4D5C7',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
    },
    itemTitulo: {
      color: 'black',
      fontSize: 16,
      fontWeight:'bold',
    },
    itemText:{
      color: 'black',
      fontSize: 16,
     // fontWeight:'bold',
    }
  });
