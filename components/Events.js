import { Text, View, StyleSheet } from 'react-native';

export default function Events(){

  const event = [
    {
      "_id": "62673304fc326f37aa00b84c",
      "nameEvent": "Na Rua de Olho para Lua",
      "dateEvent": "2022-05-09T00:00:00.000Z",
      "description": "Observacao da Luan na Praca",
      "location": "Praca Nishinomia",
      "howToSee": "Indo na praca",
      "__v": 0
    },
    {
      "_id": "62673304fc326f37aa00b84c",
      "nameEvent": "Na Rua de O Lua",
      "dateEvent": "2022-05-09T00:00:00.000Z",
      "description": "Observacao da Luan na Praca",
      "location": "Praca Nishinomia",
      "howToSee": "Indo na praca",
      "__v": 0
    }]

  return (
      <>
      {
       
       event.map((Prop) => (
          
            
              <>
              <View key={Prop._id}>
              <Text style={styles.text}>{Prop.nameEvent}</Text>
              <Text style={styles.text}>{Prop.dateEvent}</Text>
              <Text style={styles.text}>{Prop.description}</Text>
              <Text style={styles.text}>{Prop.location}</Text>
              <Text style={styles.text}>{Prop.howToSee}</Text>
              </View>
              </>
          
        ))}
    </>
  );
}


const styles = StyleSheet.create({
  
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'flex-start',
    color: '#2196F3'
  },

  // card: {

  // },
  text: {
    color: '#F7F7FC',
    alignItems: 'flex-start'
  }
  
});
