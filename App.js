import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [post, setPost] = useState("Lorem");

  return (
    <View style={styles.container}>
      {/* <Text> CS 4261 - Assignment 1.0 </Text> */}
      <View style={{ width: "80%", height: "40%" }}>
        <Text style={{ textAlign: "center" }}>{post}</Text>
      </View>
      <Button title="Get A Random Post" onPress={() => handlePress(setPost)} />

      <StatusBar style="auto" />
    </View>
  );
}

const handlePress = (setPost) => {
  console.log("button pressed");
  setPost("lorem " + Math.random());
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
