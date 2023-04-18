import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";



export default function CardFilmes() {

  return (

    <TouchableOpacity style = {styles.containerFilmes}>

      <Image style = {styles.imagemFilmes} source={require(`../../Img/6.jpg`)} />

      <Text style = {styles.tituloFilmes}> A procura da Felicidade</Text>

      <Text style = {styles.notaFilmes}>{}</Text>

    </TouchableOpacity>

  );

}