// the main style for the entire app
import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: { // This is the style to be applied to all the background elements
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ReallyLargeText: { // This should be appplied to all headings
      fontSize: 30,
      
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 10,
      
    },
    largeTextContainer: { // container for ReallyLargeText and positions it at the top of the phone.
      marginTop: 60,
      marginLeft: 22,
      marginRight: 22,
      //marginBottom: 10,
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    ButtonContainer1: {
      width: 300,
      height: 50,
      borderRadius: 100,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    ButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    MidText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      //marginBottom: 10,
    },
    fullWidthInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 10,
        fontSize: 16,
        color: 'white',
        height: 70,
       // marginBottom: 20,
    },
    inputContainer: {
      alignItems: 'center',
      marginTop: 50,
     
    },
  });
  
  export default commonStyles;
  