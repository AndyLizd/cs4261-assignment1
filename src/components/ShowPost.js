import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Clipboard,
} from "react-native";

import AppButton from "./AppButton";
import { FontAwesome5 } from "@expo/vector-icons";

import { db, messagesURL } from "../../firebase";

function ShowPost(props) {
  const [post, setPost] = useState("How about another fortune cookie?");
  const [lottery, setLottery] = useState(getLotteryNumbers());

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.text}>{post}</Text>
      </View>

      <TouchableOpacity
        style={styles.numberContainer}
        onPress={() => lotteryPress(lottery)}
      >
        <Text style={styles.number}>{lottery}</Text>
        <FontAwesome5 name="copy" size={18} color="#26a69a" />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Open A Fortune Cookie"
          onPress={() => {
            getRandomMessage(setPost);
            setLottery(getLotteryNumbers);
          }}
          color="gold"
        />
      </View>
    </View>
  );
}

const getRandomMessage = (setPost) => {
  fetch(messagesURL)
    .then((response) => response.json())
    .then((posts) => {
      let keys = Object.keys(posts);
      let randomKey = keys[Math.floor(Math.random() * keys.length)];
      setPost(posts[randomKey]["text"]);
    });
};

const getLotteryNumbers = () => {
  let res = "";
  for (let i = 0; i < 6; i++) {
    res += Math.floor(Math.random() * 10);
    res += Math.floor(Math.random() * 10);
    res += " ";
  }
  return res;
};

const lotteryPress = (numbers) => {
  Clipboard.setString(numbers);
  Alert.alert("numbers copied", "Go to Powerball website and get $1b.", [
    {
      text: "yes",
      onPress: () => {
        Linking.openURL("https://www.powerball.com/games/home");
      },
    },
    { text: "no" },
  ]);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "gray",
    lineHeight: 35,
    fontWeight: "bold",
  },
  postContainer: {
    width: "80%",
    height: "20%",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "80%",
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  number: {
    color: "#26a69a",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 6,
  },
});

export default ShowPost;
