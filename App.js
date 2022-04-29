import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/gedalImage.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 305, height: 159}} />
      <Text style={styles={color: '05051E', fontSize: 20}}>GEDAL</Text>
      <Text style={styles.text}>Grupo de estudo e divulgação da Astronomia de Londrina</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05051E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#F7F7FC'
  }
});
