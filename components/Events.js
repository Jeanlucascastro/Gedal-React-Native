import { Text, View, StyleSheet, RefreshControl, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import React from 'react';
import api from '../services/api';
import Moment from 'moment';
import 'moment/src/locale/pt-br'



export default function Events(){



  const [event, setEvent] = React.useState([])
  const [refreshing, setRefreshing] = React.useState(true);

  

  React.useEffect( () => {
    getEventData();
  },[])

  const getEventData = () => {
    api.get('/events').then((response) => {
      console.log(response.data)
      setEvent(response.data)
      setRefreshing(false);
    }).catch(error => console.log(error))
  }
  


let trLocale = require('moment/locale/pt-br');
Moment.locale('pt-br',trLocale)

  return (


<SafeAreaView style={{ flex: 1, marginTop: 0 }}>
    {refreshing ? <ActivityIndicator /> : null}
    <FlatList
        data={event}
        renderItem={({item}) => 
        
          
        
                  <View key={item._id} style={styles.event} >
                    <View style={styles.card}>
                          <Text style={styles.nameText}>Evento: </Text>
                         <Text style={styles.text}>{item.nameEvent}</Text>    
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nameText}>Data do evento: </Text>
                         
                        <Text style={styles.text}>{Moment(item.dateEvent).calendar()} </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nameText}>Descrição: </Text>
                        <Text style={styles.text}>{item.description}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nameText}>Local: </Text>
                        <Text style={styles.text}>{item.location}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.nameText}>Como Observar: </Text>
                        <Text style={styles.text}>{item.howToSee}</Text>
                    </View>
                    
                    </View>  

      }
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getEventData} />
        }

      />

      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    // alignItems: 'center',
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
    backgroundColor: '#223440',
    borderRadius: 10,
    width: "95%", 
    marginTop: 8,
    marginBottom:4,
    marginHorizontal: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    
  },

  text: {
    color: '#FFFFFF',
    // alignItems: 'flex-start',
    fontSize: 15
  },
  nameText: {
    color: '#FFFFFF',
    // alignItems: 'flex-start',
    fontSize: 18
  }
  
});
