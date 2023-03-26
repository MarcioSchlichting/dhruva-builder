import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Sidebar from './src/components/Sidebar';

export default function App() {
  return (
    <>
      <Sidebar/>
    </>
    // <View style={styles.container}>
    //   <Sidebar/>
    //   <Text>Opasdsadasdsaasdasd</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

AppRegistry.registerComponent('MyApp', () => App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
