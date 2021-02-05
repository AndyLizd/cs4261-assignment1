import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MessageModel} from './src/models/MessageModel'
import {db} from './firebase'


export default function App() {
  let mm = new MessageModel('Test message')
  mm.saveToFirebase()

  var msgRef = db.ref('messages/');
  msgRef.on('child_added', (data) => {
    console.log('msg added')
    // addCommentElement(postElement, data.key, data.val().text, data.val().author);
  });

  msgRef.on('child_changed', (data) => {
    console.log('msg changed')
    // setCommentValues(postElement, data.key, data.val().text, data.val().author);
  });

  msgRef.on('child_removed', (data) => {
    console.log('msg deleted')
    // deleteComment(postElement, data.key);
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
