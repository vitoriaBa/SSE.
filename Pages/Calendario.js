import React from 'react'; 
import { Alert, Pressable, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  DateData,
} from "react-native-calendars";
import { useState } from "react";
//import events from "../assets/data/events.json";

export default function Calendario() {
  const [items,setItems] = useState([]);

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


  const loadItems = (dia) => {

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = dia.timestamp + i * 24 * 60 * 60 * 1000;
       const strTime = timeToString(time);
  
        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ',
              height:( Math.floor(Math.random() * 150)),
              dia: strTime
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      //<Text>{item}</Text>
     <TouchableOpacity>
        <View>
          <Card>
          <Text></Text>
          </Card>
     
        </View>
     </TouchableOpacity>
    );
  
  
  }
/*
  const loadItems = (day) => {
    //setItems(events);
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";
*/
  
  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
       selected={"2022-11-25"}
        renderItem={renderItem}
        //renderEmptyDate={renderEmptyDate}
       
         showOnlySelectedDayItems
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
