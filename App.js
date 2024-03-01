import { StatusBar } from "expo-status-bar";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/home";
import { SearchPage } from "./screens/search";
import { Program } from "./screens/program";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "The Movie DB RN",
            headerTitleStyle: { color: "white" },
            headerStyle: { backgroundColor: "rgb(30, 41, 59)" },
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchPage}
          options={{
            title: "",
            headerTitleStyle: { color: "white" },
            headerStyle: { backgroundColor: "rgb(30, 41, 59)" },
          }}
        />
        <Stack.Screen
          name="Program"
          component={Program}
          options={{
            title: "",
            headerTitleStyle: { color: "white" },
            headerStyle: { backgroundColor: "rgb(30, 41, 59)" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
