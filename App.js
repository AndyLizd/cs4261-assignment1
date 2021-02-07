import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

import {MessageModel} from './src/models/MessageModel'
import {db, messagesURL} from './firebase'


export default function App() {

// <<<<<<< mn/firebase
//   let mm = new MessageModel('Test message')
//   mm.saveToFirebase()

//   var msgRef = db.ref('messages/');
//   msgRef.on('child_added', (data) => {
//     console.log('msg added')
//     // addCommentElement(postElement, data.key, data.val().text, data.val().author);
//   });

//   msgRef.on('child_changed', (data) => {
//     console.log('msg changed')
//     // setCommentValues(postElement, data.key, data.val().text, data.val().author);
//   });

//   msgRef.on('child_removed', (data) => {
//     console.log('msg deleted')
//     // deleteComment(postElement, data.key);
//   });
// =======
  const [post, setPost] = useState("<random message shows here>");
  const [input, setInput] = useState("");

  const dbURL =
    "https://cs4261-assignment1-67f47-default-rtdb.firebaseio.com/rest/post.json";
// >>>>>>> main

  return (
    <View style={styles.container}>
      {/* <Text> CS 4261 - Assignment 1.0 </Text> */}
      <View style={{ width: "80%", height: "20%" }}>
        <Text style={{ textAlign: "center" }}>{post}</Text>
      </View>

      <Button
        title="Get A Random Post"
        style={{}}
        onPress={() => getRandomMessage(setPost)}
      />

      <TextInput
        placeholder="write a new post"
        onChangeText={(text) => setInput(text)}
        value={input}
        style={{
          width: "80%",
          height: "8%",
          margin: "15%",
          backgroundColor: "#fafafa",
          borderRadius: 20,
          textAlign: "center",
        }}
      />
      <Button
        title="post"
        color="#009688"
        onPress={() => addPost(input, setInput)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const getRandomMessage = (setPost) => {
  fetch(messagesURL)
  .then((response) => response.json())
  .then((posts) => {
      let keys = Object.keys(posts)
      let randomKey = keys[Math.floor(Math.random() * keys.length)];
      setPost(posts[randomKey]['text'])
  })
}

const addPost = (input, setInput) => {
    let msg = new MessageModel(input)
    msg.saveToFirebase()

    setInput("")

    Alert.alert("Success", "Post submitted.")
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
