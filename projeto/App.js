import { StyleSheet, View } from "react-native";


import Header from "./src/components/header";

import Routes from "./src/routes";

import { NavigationContainer } from '@react-navigation/native'



export default function App() {

      return (

            <View style={styles.container}>
                  <NavigationContainer>
                  <Header></Header>
                  <Routes />
                  </NavigationContainer>



            </View>


      );

}




const styles = StyleSheet.create({

      container: {

            
         
            flex: 1,

            backgroundColor: "#643ee1",

     

      },

});