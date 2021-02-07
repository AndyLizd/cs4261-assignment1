import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import AppButton from "./AppButton";

function WritePost(props) {
  const dbURL =
    "https://cs4261-assignment1-67f47-default-rtdb.firebaseio.com/rest/post.json";

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Post your new fortune cookie"
        onChangeText={(text) => setInput(text)}
        style={styles.textInput}
      />

      <View style={styles.buttonContainer}>
        <AppButton
          title="Post"
          color="dodgerblue"
          onPress={() => addPost(input, setInput, dbURL)}
        />
      </View>
    </View>
  );
}

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
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "85%",
    height: "40%",
    margin: "15%",
    backgroundColor: "#fafafa",
    borderRadius: 20,
    textAlign: "center",
    fontSize: 16,
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
