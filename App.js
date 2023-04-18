import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from './src/components/bannerFilmes';
import Header from './src/components/header';
import Search from './src/components/searchBar';
import Filmes from './src/data/movies';



export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <Search></Search>
     <BannerFilmes></BannerFilmes>
     <FlatList
     data = {Filmes}
     
     
     />


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
