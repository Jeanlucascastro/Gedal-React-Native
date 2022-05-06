
import { Text, View, StyleSheet } from 'react-native';

 
export default function Headerr(){


  return (
    <View style={styles.top}>
    
    <Text style={ styles.title}>GEDAL</Text>
  
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
    backgroundColor: '#000609',
    height: 64, 
    paddingTop: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2196F3'
  },
  text: {
    color: '#000000',
    alignItems: 'flex-start'
  },
  side: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom:5,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#05051E',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  top: {
    flex: 0.4,
    backgroundColor: '#467595',
    marginTop: 15,
    marginBottom:5,
    width: "100%",
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  title: {
    fontSize: 25,
    color: '#05051E',
    alignItems: 'center'
    
  }
  
});
