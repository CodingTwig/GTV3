import React, { useState } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import commonStyles from './Style';

const Whatup = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
    console.log(text);
  };

  return (
    <View style={commonStyles.container}>
      <ImageBackground source={require('/home/danielthornton/GTV3/good-talk-bg-texture-charcoal.jpg')} style={commonStyles.background}>
        <View style={commonStyles.largeTextContainer}>
          <Text style={commonStyles.ReallyLargeText}>What's up?</Text>
          <Text style={commonStyles.MidText}>Wow, life is complicated sometimes.</Text>
          <Text style={commonStyles.MidText}>What's going on in yours?</Text>
          <View style={commonStyles.inputContainer}>
          <TextInput
            multiline
            numberOfLines={10}
            onChangeText={handleInputChange}
            value={inputValue}
            placeholderTextColor={'gray'}
            placeholder='Type it out, talk it out, or just think it out'
            style={commonStyles.fullWidthInput}
            returnKeyType='done'
            blurOnSubmit
          />
        </View>
        </View>


        <TouchableOpacity style={commonStyles.ButtonContainer1}>
          <Text style={commonStyles.ButtonText}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Whatup;
