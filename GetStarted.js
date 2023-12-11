import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import React from 'react';
import commonStyles from './Style';






/* The first page of the app, this will convey important information to the user and includes two buttons 
Next button: this will take the user to the next page 
About button: This button will take you to the credits page. */

const GetStarted = () =>{
    return(
       <View style={commonStyles.container}>
        <ImageBackground source={require('/home/danielthornton/GTV3/good-talk-bg-texture-charcoal.jpg')} style={commonStyles.background}>
            <View style={commonStyles.largeTextContainer}>
            <Text style={commonStyles.largeText}>
                Everyone needs to have a good talk sometimes. This simple process will help.
            </Text>
            </View>
        </ImageBackground>
       </View>
   
   
    );
};

export default GetStarted;

