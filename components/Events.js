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
    },
    {
      "_id": "23262673304fc326f37aa00b84c",
      "nameEvent": "Na Rua de Olho para Lua",
      "dateEvent": "2022-05-09T00:00:00.000Z",
      "description": "Observacao da Luan na Praca",
      "location": "Praca Nishinomia",
      "howToSee": "Indo na praca",
      "__v": 0
    },
    {
      "_id": "62673304fc326f37a222b84c",
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
              <View key={Prop._id} style={styles.event}>
              <View style={styles.card}>
                  <Text style={styles.nameText}>Evento: </Text>
                   <Text style={styles.text}>{Prop.nameEvent}</Text>    
              </View>
              <View style={styles.card}>
                  <Text style={styles.nameText}>Data do evento: </Text>
                  <Text style={styles.text}>{Prop.dateEvent}</Text>
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
              </>
          
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
    backgroundColor: '#9FD1F3',
    borderBottomWidth: 1,
    flex: 1

  },

  card: {
    flexDirection: 'row',
    padding: 10,
    width: "90%", 

   
  },

  event: {
    backgroundColor: '#8C959B',
    borderRadius: 10,
    width: "95%", 
    marginTop: 8,
    marginBottom:4,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  text: {
    color: '#000000',
    alignItems: 'flex-start'
  },
  nameText: {
    color: '#000000',
    alignItems: 'flex-start',
    fontSize: 18
  }
  
});
