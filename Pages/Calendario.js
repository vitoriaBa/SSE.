import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import {collection, onSnapshot} from "firebase/firestore"; 
import {firestore} from "../Firebase"; 

interface State {
  items?: AgendaSchedule;
}

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'],
  today: "hoje"
};
LocaleConfig.defaultLocale = 'br';

export default class AgendaScreen extends Component<{}, State> {
  state: State = {
    items: {}
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    const unsubscribe = onSnapshot(collection(firestore, 'LembretePessoais'), (querySnapshot) => {
      const items: AgendaSchedule = {};
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("Data do documento:", data);
  
        const timestamp = data.data; // Acessando diretamente o campo 'data'
        const date = timestamp.toDate(); // Convertendo para uma data JavaScript
        console.log("Data convertida:", date);
  
        const formattedDate = this.formatDate(date);
        console.log("Data formatada:", formattedDate);
        
        if (!items[formattedDate]) {
          items[formattedDate] = [];
        }
  
        items[formattedDate].push({
          name: data.titulo,
          texto: data.texto,
         // height:100
        });
      });
  
      console.log("Itens:", items);
  
      this.setState({
        items: items
      });
    });
  
    return () => unsubscribe();
  };
  
  formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam do zero 
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={new Date().toISOString().split('T')[0]}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
        markingType={'period'}
        markedDates={{
       //   '2024-05-25': {color: 'gray'},
      //    '2024-05-26': {endingDay: true, color: 'gray'}
        }}
        monthFormat={'yyyy'}
        theme={{calendarBackground: '#318B70', agendaKnobColor: 'black'}}
        renderDay={this.renderDay}
        hideExtraDays={false}
        showOnlySelectedDayItems
        reservationsKeyExtractor={this.reservationsKeyExtractor}
      />
    );
  }

  reservationsKeyExtractor = (item, index) => {
    return `${item?.day}${index}`;
  };

  renderDay = (day) => {
    if (day) {
      return <Text style={styles.customDay}>{day.getDay()}</Text>;
    }
    return <View style={styles.dayItem}/>;
  };

  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 18 : 14;
    const color = isFirst ? 'white' : 'white';

    console.log("Item de reserva:", reservation);

    return (
      <TouchableOpacity
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={styles.titulo}>{reservation.name}</Text>
        <Text style={styles.label}>{reservation.texto}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>Sem Lembrete</Text>
      </View>
    );
  };

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };
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
  },
  label:{
    fontSize: 13,
   // color: '#E4D5C7',
    fontFamily: 'BrunoAce-Regular',
    marginBottom: 10,
  },
  titulo:{
    fontSize: 18,
    color: 'black',
    fontFamily: 'BrunoAce-Regular',
    marginBottom: 10,
  }
});
