import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/BlogContext";
import AddScreen from "./src/screens/AddScreen";
import EditScreen from "./src/screens/EditScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="ShowScreen"
          component={ShowScreen}
          options={{ title: "Post Screen" }} 
          />
        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{ title: "Add Post" }} 
          />
        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={{ title: "Edit Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default () => {
  return <Provider>
    <App />
  </Provider>
};