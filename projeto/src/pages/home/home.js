import { StyleSheet, Text, View, FlatList } from "react-native";

import BannerFilmes from "../bannerFilmes";

import Filmes from "../../../src/data/movies";

import CardMovies from "../cardFilmes";

import CardSeries from "../cardSeries"

import Series from "../../../src/data/series";



export default function Home() {

  return (

    <View style={styles.container}>

  





      <View style={{width:"90%"}}>
<Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     marginRight: 75,
                     textAlign:'center'}}> Em promoção</Text>

      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Filmes}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        

        <CardMovies

        

        titulo = {item.nome}

        nota = {item.nota}

        imagem = {item.imagem}

        />

        )}

      />

      </View>

      <View style={{width:"90%"}}>

      <Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     marginRight: 75,
                     textAlign:'center'}}> Mais comprados</Text>


      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Series}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardSeries

        

        titulo = {item.nome}

        nota = {item.nota}

        imagem = {item.imagem}

        />

        )}

      />

      </View>


    </View>

  );

}




const styles = StyleSheet.create({

  container: {

   
       flex: 1,

        backgroundColor: "#643ee1",
    
        alignItems: "center",

  },

});