import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const AuthScreen = ({ navigation, facebookLogin }) => {
  useEffect(() => {
    facebookLogin();
  }, []);

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
export default connect(null, actions)(AuthScreen);
