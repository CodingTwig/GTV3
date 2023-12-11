// the main style for the entire app
import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    container:{
        flex: 1,
    },
    background: {
        flex:1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default commonStyles;