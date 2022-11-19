import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import logo from '../assets/gedalImage.png';
import Links from '../components/Links';
import LinksInfoPage from '../components/LinksInfoPage';
import Events from '../components/Events';
import React, { useState, useEffect } from 'react';
import Headerr from '../components/Headerr';
import SubHeaderr from '../components/SubHeaderr';
import axios from 'axios';
import 'moment/src/locale/pt'


export default function About({navigation}) {

  return (
    <View style={styles.container}>
      {/* <Image source={logo} style={styles.top} /> */}
          {/* <Headerr /> */}
          {/* <SubHeaderr/> */}
      {/* <ScrollView >  */}
        {/* <Events  /> */}
      {/* </ScrollView> */}
        <LinksInfoPage />
        <Links />  
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262621',
    justifyContent: 'center',
    width: "100%", 
  },
  top: {
    flex: 0.4,
    backgroundColor: '#223440',
    borderWidth: 5,
    width: "100%", 
    height: 100,
    justifyContent: 'center',
    resizeMode: "stretch"
  },

  text: {
    color: '#000000',
    // alignItems: 'flex-start'
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
