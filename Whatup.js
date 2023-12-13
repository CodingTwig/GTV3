import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Image,Alert,Button,TouchableOpacity } from 'react-native';
import React from 'react';
import commonStyles from './Style';

// This page asks the user a question that the user will respons to, then that data will be stored in a variable.
const Whatup =() =>{
    return(
        <View style={commonStyles.container}>
          <ImageBackground source={require('/home/danielthornton/GTV3/good-talk-bg-texture-charcoal.jpg')} style={commonStyles.background}>
            <View style={commonStyles.largeTextContainer}>
                <Text style={commonStyles.largeText}>
                    What's up?
                </Text>
            </View>

          </ImageBackground>
        </View>
    );
};

export default Whatup;