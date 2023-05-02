import React, {Fragment} from "react"
import { Image, Text } from "react-native"
import styles from "./style";

export default function BannerFilmes () {

    const imagem = Math.floor(Math.random() * 14 +1);
    return (

    <>
    
        <Text style = {styles.textBanner}> Novidades </Text>

        <Image style = {styles.imageBanner} source = {require(`../../Img/${imagem}.jpg`)} />
    
    
    
    
    
    </>


    );
} 