import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type CardOppotunityProps = {
  title: string;
  interest: string;
  city: string;
  state: string;
};

export function CardOppotunity({
  title,
  interest,
  city,
  state,
}: CardOppotunityProps) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: "white",
          fontWeight: "700",
          paddingBottom: 15,
        }}
      >
        {title}
      </Text>
      <View style={styles.CardDetails}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ marginRight: 10 }}
              source={require("../../assets/work-alt.png")}
            />
            <Text style={{ fontSize: 16, color: "white" }}>{interest}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              style={{ marginRight: 10 }}
              source={require("../../assets/location.png")}
            />

            <Text style={{ fontSize: 16, color: "white" }}>
              {`${city} ${""} - ${""}`} {state}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16171B",
    padding: 25,
    borderRadius: 10,
    height: 160,
    marginBottom: 10,
    justifyContent: "space-between",
    minWidth: 290,
  },
  CardDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
});
