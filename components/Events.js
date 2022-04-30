import * as WebBrowser from 'expo-web-browser';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function Events(Props){
  return (

    <View style={styles.helpContainer}>
      

    <Text style={styles.text}>{Props.nameEvent}</Text>
    <Text style={styles.text}>{Props.dateEvent}</Text>
    <Text style={styles.text}>{Props.description}</Text>
    <Text style={styles.text}>{Props.location}</Text>
    <Text style={styles.text}>{Props.howToSee}</Text>
     

    </View>
   
  );
}


const styles = StyleSheet.create({
  
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'flex-start',
    color: '#2196F3'
  },
  text: {
    color: '#F7F7FC',
    alignItems: 'flex-start'
  }
  
});
