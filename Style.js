// the main style for the entire app
import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    container:{ // this is the style to be applied to every <View></View>
        flex: 1,
    },
    background: { //this should be applied to every <ImageBackground></ImageBackground>
        flex:1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    largeText: { //This should be applied to every Text element that is the title of the given page
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
       
        
    },
    largeTextContainer: { //apply this to the view that holds the largetext
        marginBottom: 650,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    imageContainer: {// this should be applied to the container that hold the logo image for the app.
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 200,
    left: 0,
    right: 0,
    },
    ButtonContainer1: { // this should be applied to the container of a button
        width: 300,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    ButtonText: { // this should be applied to the text you want on a button with white text+
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }


});

export default commonStyles;