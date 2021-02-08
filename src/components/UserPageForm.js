import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import AppButton from "./AppButton";

import { AuthService } from "../services/AuthService";

const auth = new AuthService();

function UserPageForm({
  operation,
  promtText,
  secondaryOnPress,
  setUserState,
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="user name"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setUserName(text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.buttonContainer}>
        <AppButton
          title={operation}
          color="tomato"
          onPress={
            operation === "register"
              ? () => createUser(userName, password)
              : () => loginUser(userName, password, setUserState)
          }
        />
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={secondaryOnPress}
        >
          <Text style={styles.buttonText}>{promtText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const loginUser = async (userName, password, setUserState) => {
  const res = await auth.userExists(userName, password);
  if (!res) {
    Alert.alert("Fail to Log in", "invalid user name or password.");
  } else {
    setUserState("success");
  }
};

const createUser = (userName, password) => {
  auth.addUser(userName, password);
  Alert.alert("Success");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 3,
  },
  textInput: {
    width: "85%",
    maxHeight: "15%",
    margin: "3%",
    paddingLeft: 25,
    backgroundColor: "#fafafa",
    borderRadius: 20,
    textAlign: "justify",
    fontSize: 18,
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 4,
  },
  secondaryButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserPageForm;
