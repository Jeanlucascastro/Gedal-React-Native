
import { Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import logo from '../assets/gedalImage.png';
import api from '../services/api';




export default function SubHeaderr({navigation}) {

function openScreen(){
  navigation.navigate('Info')
}

  return (
    <View style={styles.side}>

      <View>
        {/* <Text style={styles.text}>GEDAL</Text> */}
        <Image source={logo} style={styles.logo} />
        <Text style={styles.textSub}>Proximos Eventos Astronomicos</Text>
      </View>

      <View >
        {/* <Ionicons  name="reload" size={25} color="white"  onPress={updateEvents}/> */}
        <AntDesign name="infocirlceo" size={20} color="white" onPress={openScreen} />
      </View>
    </View>
  );
}

function updateEvents() {
  api.get('/events').then((response) => {
    console.log(response.data)
    setEvent(response.data)
  }).catch(error => console.log(error))
}

const styles = StyleSheet.create({

  helpContainer: {
    marginTop: 12,
    marginHorizontal: 20,
    // alignItems: 'flex-start',
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
    color: '#FFFFFF',
    // alignItems: 'flex-center',
    fontSize: 25
  },
  textSub: {
    color: '#FFFFFF',
    // alignItems: 'start',
    fontSize: 13
  },

  side: {
    marginTop: 25,
    marginBottom: 5,
    marginHorizontal: 20,
    // alignItems: 'center',
    color: '#2196F3',
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    fontSize: 30,
    color: '#2196F3',

  },
  logo: {

    width: 130,
    height: 50
  },
  middle: {

  }

});
