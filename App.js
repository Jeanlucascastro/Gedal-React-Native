import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import logo from './assets/gedalImage.png';
import Links from './components/Links';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.top} />
   
      <ScrollView>
      <Text style={styles.text}>GEDAL</Text>
      <Text style={styles.text}>Grupo de estudo e divulgação da Astronomia de Londrina</Text>
      <Links />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05051E',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  top: {
    flex: 0.3,
    backgroundColor: '#05051E',
    borderWidth: 5,
    width: "100%", 
    height: 100,
    justifyContent: 'center',
    resizeMode: "stretch"
  },

  text: {
    color: '#F7F7FC'
  }
});
