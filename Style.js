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
    largeTextContainer: {
        marginBottom: 650,
        margin: 10,
    }


});

export default commonStyles;