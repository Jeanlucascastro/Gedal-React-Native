
import { Text, View, StyleSheet } from 'react-native';

 
export default function SubHeaderr(){


  return (
    <View style={styles.side}>
    
    <Text style={styles.text}>Grupo de estudo e divulgação da Astronomia de Londrina</Text>
   

    </View>
  );
}


const styles = StyleSheet.create({
  
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'flex-start',
    color: '#629AD9'
  },
  head: {
    backgroundColor: '#629AD9',
    height: 64, 
    paddingTop: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2196F3'
  },
  text: {
    color: '#F7F7FC',
    alignItems: 'flex-start'
  },
  side: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom:5,
    marginHorizontal: 20,
    alignItems: 'center',
    color: '#2196F3',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    color: '#2196F3',
    
  }
  
});
