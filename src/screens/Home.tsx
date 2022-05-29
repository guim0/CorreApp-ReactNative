import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "react-native-screens";
import { SearchInput } from "../components/SearchInput";

export function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
        <SearchInput/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    justifyContent: "space-between",
  },
});
