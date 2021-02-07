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

function UserPage(props) {
  const [logedIn, setLogedIn] = useState(false);
  const [newUser, setNewUser] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <FontAwesome5 name="cookie-bite" size={100} color="gray" />
      </View>

      {newUser ? (
        <BeforeLogin
          buttonText="register"
          promtText="Hava an account? Log in here."
          onPress={() => console.log("pressed")}
          secondaryOnPress={() => {
            setNewUser(false);
            console.log(newUser);
          }}
        />
      ) : (
        <BeforeLogin
          buttonText="login"
          promtText="New user? Register here."
          onPress={() => console.log("pressed")}
          secondaryOnPress={() => {
            setNewUser(true);
            console.log(newUser);
          }}
        />
      )}
    </View>
  );
}

function BeforeLogin({ buttonText, promtText, onPress, secondaryOnPress }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="user name"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChange={(text) => setUserName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
        onChange={(text) => setPassword(text)}
      />

      <View style={styles.buttonContainer}>
        <AppButton title={buttonText} color="tomato" onPress={onPress} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 50,
    flex: 1,
  },
  textInput: {
    width: "85%",
    height: "10%",
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
  textInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 3,
  },
});

export default UserPage;
