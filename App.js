import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import logo from './assets/gedalImage.png';
import Links from './components/Links';
import Events from './components/Events';
import React, { useState } from 'react';

export default function App() {
  const [ events, setEvent] = useState([]);

  class Mycomponent extends React.Component {
    constructor(props){
      super(props);
      this.setEvent = {
        error: null,
        isLoaded: false,
        items: []
      }
    }

    componentMount() {

      fetch("http://localhost:3000/events")
            .then(res => res.json())
            .then(
              (result) => { 
                this.setEvent({
                  isLoaded: true.valueOf,
                  items: result.items
      });
    }) }
    
  }


  




  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.top} />
      <ScrollView>
      <Text style={styles.text}>GEDAL</Text>
      <Text style={styles.text}>Grupo de estudo e divulgação da Astronomia de Londrina</Text>
      
      <Links />

        
        <Events nameEvent={events.nameEvent} dateEvent={events.dateEvent} description={events.description} location={events.location} howToSee={events.howToSee} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05051E',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
    color: '#F7F7FC',
    alignItems: 'flex-start'
  }
});
