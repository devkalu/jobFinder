import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
      <Button
        title="Go Bottom Navigation"
        onPress={() => navigation.navigate("BottomTab")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
});
export default AuthScreen;
