import { StyleSheet, Text, View, FlatList } from "react-native";


import CardSeries from "../cardSeries"

import TenisMaisComprados from "../../data/tenisMaisComprados";

import Tenis from "../../data/tenis"





export default function TenisPage() {

  return (

    <View style={styles.container}>

 

      <View style={{width:"90%"}}>

      <Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     marginRight: 75,
                     textAlign:'center'}}> Mais comprados</Text>


      <FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={TenisMaisComprados}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardSeries

        

        titulo = {item.nome}

        preco= {item.preco}

        imagem = {item.imagem}

origem = {item.origem}

tamanho = {item.tamanho}

        />

        )}

      />
      <Text style = {{fontSize:25,
                    color: 'white',
                    fontWeight:'bold',
                     marginRight: 75,
                     textAlign:'center'}}> Todos os Produtos </Text>

<FlatList

      horizontal ={true}

      showsHorizontalScrollIndicator={false}

        data={Tenis}

        keyExtractor={(item) => item.id}

        renderItem={ ({item}) => (

        
           


        <CardSeries

        

        titulo = {item.nome}

        preco= {item.preco}

        imagem = {item.imagem}

origem = {item.origem}

tamanho = {item.tamanho}

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