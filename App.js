import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import logo from './assets/gedalImage.png';
import Links from './components/Links';
import Events from './components/Events';
import React, { useState } from 'react';
import Headerr from './components/Headerr';
import SubHeaderr from './components/SubHeaderr';


export default function App() {

  const event = [
    {
      "_id": "62673304fc326f37aa00b84c",
      "nameEvent": "Na Rua de Olho para Lua",
      "dateEvent": "2022-05-09T00:00:00.000Z",
      "description": "Observacao da Luan na Praca",
      "location": "Praca Nishinomia",
      "howToSee": "Indo na praca",
      "__v": 0
    },
    {
      "_id": "62673304fc326f37aa00b84c",
      "nameEvent": "Na Rua de O Lua",
      "dateEvent": "2022-05-09T00:00:00.000Z",
      "description": "Observacao da Luan na Praca",
      "location": "Praca Nishinomia",
      "howToSee": "Indo na praca",
      "__v": 0
    }]
  const [ events, setEvent] = useState([]);

  return (
    <View style={styles.container}>
      {/* <Image source={logo} style={styles.top} /> */}
          <Headerr />
          <SubHeaderr/>
      <ScrollView> 
        <Events Props={event} />
      </ScrollView>
        <Links />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFCFD',
    justifyContent: 'center',
    width: "100%", 
  },
  top: {
    flex: 0.4,
    backgroundColor: '#05051E',
    borderWidth: 5,
    width: "100%", 
    height: 100,
    justifyContent: 'center',
    resizeMode: "stretch"
  },

  text: {
    color: '#000000',
    alignItems: 'flex-start'
  },

  title: {
    fontSize: 30
  },

  subtitle: {
    backgroundColor: '#05051E',
    resizeMode: "stretch",
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
