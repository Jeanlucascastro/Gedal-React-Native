import * as WebBrowser from 'expo-web-browser';
import { Text, View, Button, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Links(){
  return (

      <View style={styles.side}>

      <Text style={styles.text}>Siga nas Redes Sociais </Text>

        <View style={styles.side}>
        <FontAwesome name="facebook-official" backgroundColor="#3b5998" size={30} color="black" onPress={handleFacebook} />
    


        </View>

        <View style={styles.side}>
        <FontAwesome name="instagram" size={30} color="black" onPress={handleInstagram} />


        </View>

        <View style={styles.side}>
        <FontAwesome name="youtube-play" size={30} color="black" onPress={handleYoutube}/>

    
        </View>
      </View>
   
  );
}

function handleFacebook() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/grupogedal/'
  );
}

function handleInstagram() {
  WebBrowser.openBrowserAsync(
    'https://www.instagram.com/grupogedal/'
  );
}

function handleYoutube() {
  WebBrowser.openBrowserAsync(
    'https://www.youtube.com/c/GrupoGEDAL'
  );
}
const styles = StyleSheet.create({
  
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    color: '#2196F3'
  },
  side: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom:5,
    marginHorizontal: 20,
    alignItems: 'center',
    color: '#2196F3',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: '#05051E',
    alignItems: 'flex-start'
  }
});

