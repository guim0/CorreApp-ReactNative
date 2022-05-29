import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";

type SearchInputProps = {
  userName?: string;
};
export function SearchInput({ userName }: SearchInputProps) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'baseline', justifyContent: "space-between"}}>
      <Image
        source={require("../../assets/serviceIcon.png")}
      />
      {userName && (
        <Text style={{ fontSize: 16, color: "white", fontWeight: "600", paddingBottom:20 }}>
          Olá, {userName}
        </Text>
      )}
        </View>
      <View>
        <TextInput
          style={styles.SearchInput}
          placeholder="O que você procura?"
          clearButtonMode="always"
        />
        <Pressable style={styles.filterButton}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            FILTRAR POR{"    "}
            <Image source={require("../../assets/filterIcon.png")} />
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
