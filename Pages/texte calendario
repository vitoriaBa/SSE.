import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');
  LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ],
  
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['segunda', 'ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: "Aujourd'hui"
  };
  
  LocaleConfig.defaultLocale = 'fr';
  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}

      style={{
        borderWidth: 1,
        height: 350,
      
        backgroundColor: '#174738',
        calendarBackground: '#174738',
        textSectionTitleColor: '#e8e8e8',
        selectedDayBackgroundColor: '#206550',
        selectedDayTextColor: '#174738',
        todayTextColor: '#206550',
        dayTextColor: '#e8e8e8',
        textDisabledColor: '#206550'
      // Specify the current date
      }}
      current={'2012-03-01'}
      // Callback that gets called when the user selects a day

      // Mark specific dates as marked
  
    />
  );
};

export default App;