import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Sidebar from './src/components/Sidebar';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/localization/i18n';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Sidebar />
    </I18nextProvider>
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
