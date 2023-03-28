import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Search from './src/components/searchBar';

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <Search></Search>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
   
  },
});
