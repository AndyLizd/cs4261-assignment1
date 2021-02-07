import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton";

function ShowPost(props) {
  const [post, setPost] = useState("How about another fortune cookie?");
  const [input, setInput] = useState("");

  const dbURL =
    "https://cs4261-assignment1-67f47-default-rtdb.firebaseio.com/rest/post.json";

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.text}>{post}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Get A Fortune Cookie"
          onPress={() => getRandomPost(setPost, dbURL)}
          color="gold"
        />
      </View>
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
});

export default ShowPost;
