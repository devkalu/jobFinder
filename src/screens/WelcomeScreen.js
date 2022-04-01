import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to the Job App", color: "#03A9F4" },
  { text: "Apply for a job", color: "#009688" },
  { text: "Set your location", color: "#03A9F4" },
];

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Slides data={SLIDE_DATA} />
      {/* <View style={{ flex: 1 }}>
        <Button
          title="Go to AuthScreen"
          onPress={() => navigation.navigate("Auth")}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
  },
});
export default WelcomeScreen;
