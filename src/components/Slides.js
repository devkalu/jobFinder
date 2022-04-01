import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const Slides = ({ data }) => {
  const navigation = useNavigation();

  const renderSlides = () => {
    return data.map((slide, index) => {
      return (
        <View
          key={index}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {index === data.length - 1 ? (
            <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
              <View style={styles.getStarted}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: slide.color,
                  }}
                >
                  Get Started
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      );
    });
  };

  return (
    <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
      {renderSlides()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "white",
  },
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  getStarted: {
    backgroundColor: "white",
    width: 120,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default Slides;
