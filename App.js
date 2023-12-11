import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import GetStarted from "./GetStarted"; //imports the GetStarted page

const navStack = createStackNavigator(); //creates a constant navStack which holds a new navigation component 

/* Const app is the main app file. it does not hold any ui data but sets up and manages all the 
routing that will happen during the duration that the app is in use*/

const App = ()=>{
  return(
    <NavigationContainer>
      <navStack.Navigator initialRouteName="Home"> 
        <navStack.Screen name="Home" component = {GetStarted} options={{headerShown: false}}/> 
      </navStack.Navigator>
    </NavigationContainer>
  );
};


export default App;