import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import api from '../services/api';
import Moment from 'moment';



export default function Events(){

  const [event, setEvent] = React.useState([])

  React.useEffect( () => {
    api.get('/events').then((response) => {
      console.log(response.data)
      setEvent(response.data)
    }).catch(error => console.log(error))
  },[])

  

  Moment.locale('pt-br');

  return (
      <>
      {
       
       event.map((Prop) => (
          
              <View key={Prop._id} style={styles.event}>
              <View style={styles.card}>
                    <Text style={styles.nameText}>Evento: </Text>
                   <Text style={styles.text}>{Prop.nameEvent}</Text>    
              </View>
              <View style={styles.card}>
                  <Text style={styles.nameText}>Data do evento: </Text>
                   
                  <Text style={styles.text}>{Moment(Prop.dateEvent).format('d MMM YYYY')} </Text>
              </View>
              <View style={styles.card}>
                  <Text style={styles.nameText}>Descrição: </Text>
                  <Text style={styles.text}>{Prop.description}</Text>
              </View>
              <View style={styles.card}>
                  <Text style={styles.nameText}>Local: </Text>
                  <Text style={styles.text}>{Prop.location}</Text>
              </View>
              <View style={styles.card}>
                  <Text style={styles.nameText}>Como Observar: </Text>
                  <Text style={styles.text}>{Prop.howToSee}</Text>
              </View>
              </View>
              
          
        ))}
    </>
  );
}


const styles = StyleSheet.create({
  
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    color: '#2196F3',
    padding: 15,
    backgroundColor: '#150D0D',
    borderBottomWidth: 1,
    flex: 1

  },

  card: {
    padding: 10,
    width: "90%", 

   
  },

  event: {
    backgroundColor: '#000000',
    borderRadius: 10,
    width: "95%", 
    marginTop: 8,
    marginBottom:4,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  text: {
    color: '#FFFFFF',
    alignItems: 'flex-start',
    fontSize: 15
  },
  nameText: {
    color: '#FFFFFF',
    alignItems: 'flex-start',
    fontSize: 18
  }
  
});
