import { StyleSheet} from "react-native";
import Table from '../../components/tabela';




export default function App() {

  return (

    <View style={styles.container}>

    <Table></Table>

    </View>

  );

}




const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#141a29",

    alignItems: "center",

  },

});