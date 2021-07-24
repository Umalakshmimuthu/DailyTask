import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const MyText = (props) => {
  return (
    <Text style={styles.text}>
      My Name Is {props.Name} and My MobileNumber is {props.mobilenumber}
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: Platform.OS === "android" ? "15" : "45",
    color: "blue",
  },
  box: {
    borderRadius: 20,
    backgroundColor: "gold",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 270,
  },
});

export default MyText;
