import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Image,Alert,Button,TouchableOpacity, TextInput, Keyboard } from 'react-native';
import React from 'react';
import commonStyles from './Style';
import { useState } from 'react';


// This page asks the user a question that the user will respons to, then that data will be stored in a variable.


const Whatup =() =>{


        const [inputValue,setInputValue] = useState('');

        const handleInputChange = (text)=>{
            setInputValue(text);
            console.log(text);
            
        };
      
    
    return(
        <View style={commonStyles.container}>
          <ImageBackground source={require('/home/danielthornton/GTV3/good-talk-bg-texture-charcoal.jpg')} style={commonStyles.background}>
            <View style={commonStyles.largeTextContainer}>
                <Text style={commonStyles.ReallyLargeText}>
                    What's up?
                </Text>
        
             <Text style={commonStyles.MidText}>
                    Wow, life is complicated sometimes. 
                </Text>
          
            
                <Text style={commonStyles.MidText}>
                    What's going on in yours?
                </Text>

              

             

          
          

            </View>
            <TextInput
                multiline
                numberOfLines={10}
                onChangeText={handleInputChange}
                value={inputValue}
                placeholderTextColor={'gray'}
                placeholder='Type it out, talk it out, or just think it out'
                style={commonStyles.input}
                returnKeyType='done'
                blurOnSubmit
                
                
                />

            
          </ImageBackground>
        </View>
    );
};

export default Whatup; 