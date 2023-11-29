import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const TabelaCliente = () => {
  const data = [
    { id: 1, nome: 'João', cpf: '123.456.789-00', renda: 5000 },
    { id: 2, nome: 'Maria', cpf: '987.654.321-00', renda: 6000 },
    // Adicione mais dados conforme necessário
  ];

  const handleEditar = (id) => {
    // Lógica para editar o item com o ID fornecido
    console.log(`Editar item com ID ${id}`);
  };

  const handleExcluir = (id) => {
    // Lógica para excluir o item com o ID fornecido
    console.log(`Excluir item com ID ${id}`);
  };

  const navigation = useNavigation();

  return (
    <View>
      <DataTable style={{backgroundColor: '#FFF', width: 400, marginTop: 50, fontsize: 10}}>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>CPF</DataTable.Title>
          <DataTable.Title>Renda</DataTable.Title>
          <DataTable.Title>Editar</DataTable.Title>
          <DataTable.Title>Excluir</DataTable.Title>
        </DataTable.Header>

        {data.map((item) => (
          <DataTable.Row key={item.id} style={{width: 410}}>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{item.nome}</DataTable.Cell>
            <DataTable.Cell>{item.cpf}</DataTable.Cell>
            <DataTable.Cell>{item.renda}</DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity>
                <Ionicons name="pencil-outline" size={24} color="black" />
              </TouchableOpacity>
            </DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity onPress={() => handleExcluir(item.id)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};



export default TabelaCliente;
