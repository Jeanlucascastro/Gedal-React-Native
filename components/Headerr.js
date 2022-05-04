import * as WebBrowser from 'expo-web-browser';
import { Text, View, Button, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons';
 
export default function Headerr(){


  return (
    <View style={styles.helpContainer}>
    
    <Text style={ styles.text}>GEDAL</Text>
   

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
