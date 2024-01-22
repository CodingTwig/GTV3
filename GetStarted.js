import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Image,Alert,Button,TouchableOpacity } from 'react-native';
import React from 'react';
import commonStyles from './Style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';








/* The first page of the app, this will convey important information to the user and includes two buttons 
Next button: this will take the user to the next page 
About button: This button will take you to the credits page. */

const GetStarted = ({ navigation }) =>{ // this takes care of the button logic 
    const onButton = ()=>{
        //nav 
        navigation.navigate('whatUp');
    };

    return(
       <View style={commonStyles.container}>
        <ImageBackground source={require('/home/danielthornton/GTV3/good-talk-bg-texture-charcoal.jpg')} style={commonStyles.background}>
            <View style={commonStyles.largeTextContainer}>
            <Text style={commonStyles.ReallyLargeText}>
                Everyone needs to have a good talk sometimes. This simple process will help.
            </Text>
            
            </View>
            <View style={commonStyles.imageContainer}>
                <Image source={require('/home/danielthornton/GTV3/Good-Talk-Logo-white-text.png')} style={{width:170,height:170,}}/>
               <TouchableOpacity style={commonStyles.ButtonContainer1} onPress={onButton}>
                    <Text style={commonStyles.ButtonText}>Let's get started</Text>
               </TouchableOpacity>
            </View>
           
         
          
        </ImageBackground>
       </View>
   
   
    );
};

export default GetStarted;

