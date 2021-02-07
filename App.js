import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

import {MessageModel} from './src/models/MessageModel'
import {db} from './firebase'


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
  const [post, setPost] = useState("Lorem");
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
        onPress={() => getRandomPost(setPost, dbURL)}
      />

      <TextInput
        placeholder="write a new post"
        onChangeText={(text) => setInput(text)}
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
        onPress={() => addPost(input, setInput, dbURL)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const getRandomPost = (setPost, dbURL) => {
  console.log("button pressed");

  fetch(dbURL)
    .then((response) => response.json())
    .then((posts) => {
      const idx = Math.floor(Math.random() * posts.length);
      setPost(posts[idx].content);
      return posts;
    })
    .then((posts) => {
      while (posts.length > 10) {
        const idx = Math.floor(Math.random() * posts.length);
        posts.splice(idx, 1); // remove posts[idx]
      }
      putPosts(posts, dbURL);
    });
};

const putPosts = (posts, dbURL) => {
  fetch(dbURL, {
    method: "PUT",
    body: JSON.stringify(posts),
  });
};

const addPost = (input, setInput, dbURL) => {
  fetch(dbURL)
    .then((response) => response.json())
    .then((posts) => {
      posts.push({ content: input });
      console.log(posts);
      putPosts(posts, dbURL);
    })
    .then((res) => setInput(""))
    .then((res) => Alert.alert("Success", "Post submitted."));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
