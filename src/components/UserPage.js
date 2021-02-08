import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import AppButton from "./AppButton";
import UserPageForm from "./UserPageForm";

function UserPage(props) {
  const [userState, setUsterState] = useState("login");

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <FontAwesome5
          name="cookie-bite"
          size={100}
          color={userState === "success" ? "tomato" : "gray"}
        />
      </View>

      {renderContent(userState, setUsterState)}
    </View>
  );
}

const renderContent = (userState, setUserState) => {
  switch (userState) {
    case "register":
      return (
        <UserPageForm
          operation="register"
          promtText="Hava an account? Log in here."
          secondaryOnPress={() => setUserState("login")}
          setUserState={setUserState}
        />
      );
    case "login":
      return (
        <UserPageForm
          operation="login"
          promtText="New uster? Register here."
          secondaryOnPress={() => setUserState("register")}
          setUserState={setUserState}
        />
      );
    case "success":
      return (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>You are logged in.</Text>
          <AppButton
            title="log out"
            color="tomato"
            onPress={() => setUserState("login")}
          />
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "30%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 50,
    top: 10,
  },
  successContainer: {
    width: "100%",
    height: "40%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  successText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "tomato",
  },
});

export default UserPage;
