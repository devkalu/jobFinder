import "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Screen
import AuthScreen from "../screens/AuthScreen";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingScreen from "../screens/SettingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const SettingStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review Screen"
        component={ReviewScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <View style={{ paddingHorizontal: 20 }}>
                <Ionicons name="ios-settings" size={24} color="black" />
              </View>
            </TouchableOpacity>
          ),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Review Screen")}
            >
              <View style={{ paddingHorizontal: 20 }}>
                <Text>Review</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Deck" component={DeckScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen
        name="Review"
        component={SettingStackNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
