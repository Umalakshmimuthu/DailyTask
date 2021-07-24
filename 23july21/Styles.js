import React from "react";
import { StyleSheet } from "react-native";

const Styles = (props) => {
  return (
    <Text style={styles.text}>
      {props.chidren}
      {props.str}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontcolor: "gold",
  },
});
export default Styles;
