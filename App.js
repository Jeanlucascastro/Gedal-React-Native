import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import logo from './assets/gedalImage.png';
import Links from './components/Links';
import Events from './components/Events';
import React, { useState, useEffect } from 'react';
import Headerr from './components/Headerr';
import SubHeaderr from './components/SubHeaderr';
import axios from 'axios';


export default function App() {


  // var event =  axios.get('http://192.168.0.197:3000/events').then((json) => {
  //   console.log(json)
  //   return json.data;
  // }
  // ).catch((error) => {
  //   throw error;
  // });
  // // var event = []

  // var request = new XMLHttpRequest();
  // request.onreadystatechange = (e) => {
  //   if (request.readyState !== 4) {
  //     return;
  //   }
  
  //   if (request.status === 200) {
  //     console.log('success');
      
  //     event = request._response
  //     console.log(event)
      
  //   } else {
  //     console.warn('error');
  //   }
  // };
  
  // request.open('GET', 'http://192.168.0.197:3000/events/');
  // request.send(); 
  
  




  return (
    <View style={styles.container}>
      {/* <Image source={logo} style={styles.top} /> */}
          {/* <Headerr /> */}
          <SubHeaderr/>
      <ScrollView> 
        <Events  />
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
