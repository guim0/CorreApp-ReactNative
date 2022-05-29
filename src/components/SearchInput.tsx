import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import SearchInputIcon from "../../assets/serviceIcon.png";
import FilterButtonIcon from "../../assets/filterIcon.png";

export function SearchInput() {
  return (
    <View style={styles.container}>
      <Image style={{ marginBottom: -5 }} source={SearchInputIcon} />
      <View>
        <TextInput
          style={styles.SearchInput}
          placeholder="O que você procura?"
          clearButtonMode="always"
        />
        <Pressable style={styles.filterButton}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            FILTRAR POR{"    "}
            <Image  source={FilterButtonIcon} />
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 350,
    minWidth: 300,
  },
  SearchInput: {
    padding: 15,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "white",


  },
  filterButton: {
    alignItems: "center",
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#ECBD15",
  },

});
