import React from 'react';
import { useState } from 'react';
import { Calendar,Agenda } from 'react-native-calendars';
import { Text, SafeAreaView, StyleSheet, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';


export default function Calendario() {
  const [items,setItems] = useState([]);
  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


// dia : DateData day
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
            height: Math.max(40, Math.floor(Math.random() * 150)),
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
 //  <TouchableOpacity>
   // <Card>
    
     /// <View>
     // <Text>{item}</Text>
      <Text>aa</Text>
     // </View>
    
   // </Card>
   //</TouchableOpacity>
  );


}

  return (

      <View style={{flex:1}} > 
    <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        renderItem={renderItem}
       
        horizontal
      />
      </View>
 
  );
}
