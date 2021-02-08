import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function Navbar({ setPage }) {
  return (
    <View style={styles.container}>
      <Option
        icon={<FontAwesome5 name="cookie-bite" size={42} color="gold" />}
        page={0}
        setPage={setPage}
      />
      <Option
        icon={<FontAwesome name="pencil" size={42} color="dodgerblue" />}
        page={1}
        setPage={setPage}
      />
      <Option
        icon={<FontAwesome name="user" size={42} color="tomato" />}
        page={2}
        setPage={setPage}
      />
    </View>
  );
}

function Option({ icon, page, setPage }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => setPage(page)}>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "stretch",
    alignItems: "stretch",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
});

export default Navbar;
