import * as WebBrowser from 'expo-web-browser';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Links(){
  return (

      <View style={styles.helpContainer}>
        <Button onPress={handleFacebook}  title="Facebook">
        <Entypo name="facebook" size={24} color="black" />
          <Text >
           Facebook
          </Text>
        </Button>
        <Button onPress={handleInstagram}  title="Instagram">
        <Entypo name="instagram" size={24} color="black" />
          <Text >
           Instagram
          </Text>
        </Button>
        <Button onPress={handleYoutube} title="YouTube">
        <Entypo name="youtube" size={24} color="black" />
          <Text >
           YouTube
          </Text>
        </Button>
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
  
});

