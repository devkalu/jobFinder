import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import WelcomeStackNavigator from "./src/navigation";
import { Provider } from "react-redux";

import store from "./src/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <WelcomeStackNavigator />
      </Provider>
    </>
  );
}
