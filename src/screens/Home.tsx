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
import { useNavigation, useRoute } from "@react-navigation/native";
import { SearchInput } from "../components/SearchLabel";
import { CardOppotunity } from "../components/CardOpportunity";
import { Oppotunity } from "../api/Oppotunity";

type ParamProps = {
  name: string;
};

export function Home() {
  const routes = useRoute();

  const { name } = routes.params as ParamProps;


  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 20 }}>
        <SearchInput userName={name} />
      </View>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        {Oppotunity.map((items) => (
          <CardOppotunity userName={name} {...items} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
  },
});
