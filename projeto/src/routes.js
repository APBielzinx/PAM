import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "./pages/home/home";
import Search from "./components/searchbar";


import {Entypo, FontAwesome5,  MaterialCommunityIcons  } from '@expo/vector-icons'
import TenisPage from "./pages/tenis/tenis";
import CalcasPage from "./pages/calcas/calcas";
import CamisasPage from "./pages/camisas/camisas";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
              backgroundColor:'#000000',
                borderTopColor:'transparent',
            
                
                
            },
            tabBarActiveTintColor:'#643ee1',
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
            component ={CamisasPage} 
            options={{
                tabBarIcon: ({size, color
                
                }) => (
                    <FontAwesome5 name="tshirt" size={size} color={color}/>
                )
            }}
            /> 
             <Tab.Screen
            name ="Calças" 
            component ={CalcasPage} 
            options={{
                tabBarIcon: ({size, color
                
                }) => (
                    <FontAwesome5 name="tshirt" size={size} color={color}/>
                )
            }}
            /> 
             <Tab.Screen
            name ="Tenis" 
            component ={TenisPage} 
            options={{
                tabBarIcon: ({size, color
                
                }) => (
                    <MaterialCommunityIcons name="shoe-heel" size={size} color={color}/>
                )
            }}
            /> 



        </Tab.Navigator>
    )
}