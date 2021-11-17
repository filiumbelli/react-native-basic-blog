import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: "Home Page" }} />
        <Stack.Screen
          name="ShowScreen"
          component={ShowScreen}
          options={{ title: "Post Screen" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
};