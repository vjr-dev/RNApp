import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../components/Home';
import Counter from '../components/Counter';
import Profile from '../components/Profile';

const StackNav = createStackNavigator();

export default class AppNav extends Component {

    render() {

        return (

            
         <NavigationContainer>
         <StackNav.Navigator>
           <StackNav.Screen name="Home" component={Home} />
           <StackNav.Screen name="Counter" component={Counter} />
           <StackNav.Screen name="Profile" component={Profile} />
         </StackNav.Navigator>
        </NavigationContainer>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
      
        alignItems:'center',
        width: 300,
        height: 300,
    },
    
})