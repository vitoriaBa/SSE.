import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule, } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { collection, onSnapshot} from "firebase/firestore"; 
import { firestore } from "../Firebase"; 
interface State {
  items?: AgendaSchedule;
}


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

export default class AgendaScreen extends Component/*<State>*/ {
  state: State = {
    items: undefined
  };

   reservationsKeyExtractor = (item, index) => {
     return `${item?.reservation?.day}${index}`;
   };
   
   


  render() {
    return (
      <Agenda
       
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        //chama o dia atual
        selected={new Date().toISOString().split('T')[0]}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}

        //cor do dia no calendario
         markingType={'period'}
         markedDates={{
            '2017-05-08': {textColor: '#43515c'},
            '2017-05-09': {textColor: '#43515c'},
            '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
            '2024-05-25': {color: 'gray'},
           '2017-05-26': {endingDay: true, color: 'gray'}}}
        monthFormat={'yyyy'}
         theme={{calendarBackground: '#236E57', agendaKnobColor: '#174738'}}
         renderDay={this.renderDay}
         hideExtraDays={false}
        showOnlySelectedDayItems
        reservationsKeyExtractor={this.reservationsKeyExtractor}
      />
    );
  }

  loadItems = () => {
    const unsubscribe = onSnapshot(collection(firestore, 'LembretePessoais'), (querySnapshot) => {
      const items = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("Data do documento:", data);

        if (data.data && data.data.seconds && data.data.nanoseconds) {
          const date = new Date(data.data.seconds * 1000 + data.data.nanoseconds / 1000000);
          const formattedDate = this.formatDate(date); // Chamando a função formatDate corretamente

          if (!items[formattedDate]) {
            items[formattedDate] = [];
          }

          items[formattedDate].push({
            name: data.titulo,
            height: 50,
            day: formattedDate
          });
        } else {
          console.error("O campo 'data' não está definido corretamente no documento:", doc.id);
        }
      });

      this.setState({
        items: items
      });
    });

    return () => unsubscribe();
  };

/*  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Os meses começam do zero
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }*/



// Função para converter a data para uma string no formato desejado
formatDateToString(date) {
    return date.toISOString().split('T')[0]; // Retorna a data no formato "YYYY-MM-DD"
}



     /* const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  };*/

  renderDay = (day) => {
    if (day) {
      return <Text style={styles.customDay}>{day.getDay()}</Text>;
    }
    return <View style={styles.dayItem}/>;
  };

  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 18 : 14;
    const color = isFirst ? 'black' : 'black';

    return (
      <TouchableOpacity
        
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
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
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: 'green'
  },
  dayItem: {
    marginLeft: 34
  }
});

