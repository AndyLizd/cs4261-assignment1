import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton";

import { db, messagesURL } from "../../firebase";

function ShowPost(props) {
  const [post, setPost] = useState("How about another fortune cookie?");

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.text}>{post}</Text>
      </View>

      <View style={styles.numberContainer}>
        <Text style={styles.number}>01 16 48 49 65 08</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Open A Fortune Cookie"
          // onPress={() => getRandomPost(setPost, dbURL)}
          onPress={() => getRandomMessage(setPost)}
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

// const putPosts = (posts, dbURL) => {
//   fetch(dbURL, {
//     method: "PUT",
//     body: JSON.stringify(posts),
//   });
// };

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
  },
  number: {
    color: "#26a69a",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ShowPost;
