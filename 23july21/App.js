import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import MyText from "./MyText";
// import CustomText from "./CustomText.android";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "green",
          width: 300,
          height: 300,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="message" size={150} color="blue" />

        <View style={styles.inner}>
          <MyText Name="Umalakshmi" mobilenumber="8778379157"></MyText>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },

  inner: {
    height: 100,
    width: 100,
    backgroundColor: "gold",
  },
});
