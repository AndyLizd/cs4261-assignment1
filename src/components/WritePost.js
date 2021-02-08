import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import AppButton from "./AppButton";

import { MessageModel } from "../models/MessageModel";
import { db, messagesURL } from "../../firebase";

function WritePost(props) {
  const dbURL =
    "https://cs4261-assignment1-67f47-default-rtdb.firebaseio.com/rest/post.json";

  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Post a new fortune cookie"
        onChangeText={(text) => setInput(text)}
        style={styles.textInput}
      />

      <View style={styles.buttonContainer}>
        <AppButton
          title="Post"
          color="dodgerblue"
          // onPress={() => addPost(input, setInput, dbURL)}
          onPress={() => addPost(input, setInput)}
        />
      </View>
    </View>
  );
}

// const addPost = (input, setInput, dbURL) => {
//   fetch(dbURL)
//     .then((response) => response.json())
//     .then((posts) => {
//       posts.push({ content: input });
//       console.log(posts);
//       putPosts(posts, dbURL);
//     })
//     .then((res) => setInput(""))
//     .then((res) => Alert.alert("Success", "Post submitted."));
// };

const addPost = (input, setInput) => {
  let msg = new MessageModel(input);
  msg.saveToFirebase();
  setInput("");
  Alert.alert("Success", "Post submitted.");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "85%",
    height: "45%",
    margin: "15%",
    backgroundColor: "#fafafa",
    borderRadius: 20,
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "80%",
  },
});

export default WritePost;
