import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

import {AuthService} from './src/services/AuthService'
import {MessageModel} from './src/models/MessageModel'
import {db} from './firebase'

import Navbar from "./src/components/Navbar";
import ShowPost from "./src/components/ShowPost";
import WritePost from "./src/components/WritePost";
import UserPage from "./src/components/UserPage";

export default function App() {
  const [page, setPage] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderContent(page)}</View>

      <View style={styles.navbar}>
        <Navbar setPage={setPage} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const renderContent = (page) => {
  switch (page) {
    case 0:
      return <ShowPost />;
    case 1:
      return <WritePost />;
    case 2:
      return <UserPage />;
    default:
      return <ShowPost />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    flex: 9,
  },
  navbar: {
    flex: 1,
    // width: "100%",
  },
});
