import * as WebBrowser from 'expo-web-browser';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function Events(Props){
  return (

    <View style={styles.container}>
      
   
      
    <Text>{Props.nameEvent}</Text>
    <Text>{Props.dateEvent}</Text>
    <Text>{Props.description}</Text>
    <Text>{Props.location}</Text>
    <Text>{Props.howToSee}</Text>
     

    </View>
   
  );
}


const styles = StyleSheet.create({
  
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    color: '#2196F3'
  },
  
});
