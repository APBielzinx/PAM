import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "./pages/home/home";
import Camisas from "./pages/camisas/camisas";
import Search from "./components/searchbar";

import {Entypo, FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor:'#121212',
                borderTopColor:'transparent'
            },
            tabBarActiveTintColor:'fff',
            tabBarStyle:{
                paddingBottom:5,
                paddingTop:5
            }
}}>
           <Tab.Screen
            name ="Home" 
            component ={Home} 
            options={{
                tabBarIcon: ({size, color
                
                }) => (
                    <Entypo name="home" size={size} color={color}/>
                )
            }}
            /> 
            <Tab.Screen
            name ="procurar" 
            component ={Search} 
            options={{
                tabBarIcon: ({size, color
                
                }) => (
                    <FontAwesome5 name="search" size={size} color={color}/>
                )
            }}
            /> 
           <Tab.Screen
            name ="Camisas" 
            component ={Camisas} 
            options={{
                tabBarIcon: ({size, color
                
                }) => (
                    <FontAwesome5 name="tshirt" size={size} color={color}/>
                )
            }}
            /> 



        </Tab.Navigator>
    )
}