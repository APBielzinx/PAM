import { StyleSheet, Text, View, FlatList } from "react-native";



import CardMovies from "../cardFilmes";

import CardSeries from "../cardSeries"

import Camisas from "../../data/camisas";

import CamisasMaisCompradas from "../../data/camisasMaisCompradas"



export default function CamisasPage() {

  return (

    <View style={styles.container}>

  





      <View style={{width:"90%"}}>
<Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     marginRight: 75,
                     textAlign:'center'}}>  Mais comprados </Text>

      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={CamisasMaisCompradas}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        

        <CardMovies

        

        titulo = {item.nome}

        preco= {item.preco}

        imagem = {item.imagem}
         
origem = {item.origem}

        tamanho = {item.tamanho}

        />

        )}

      />

      </View>

      <View style={{width:"90%"}}>

      <Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     marginRight: 75,
                     textAlign:'center'}}> Todos os produtos </Text>


      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Camisas}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardSeries

        

          titulo = {item.nome}

        preco= {item.preco}

        imagem = {item.imagem}
         
        origem = {item.origem}

        tamanho = {item.tamanho}


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