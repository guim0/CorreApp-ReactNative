import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type CardOppotunityProps = {
  userName: string;
  title: string;
  interest: string;
  city: string;
  state: string;
  badges: [string];
  description: string;
  homeService: boolean;
  schedule:[]
};

export function CardOppotunity({
  userName,
  title,
  interest,
  city,
  state,
  badges,
  description,
  homeService,
  schedule
 
}: CardOppotunityProps) {
  const navigation = useNavigation();

  function GoToCompanyProfile() {
    navigation.navigate("CompanyProfile", {
      nameCompany: title,
      badges: badges,
      city: city,
      homeService: homeService,
      state: state,
      description: description,
      interest: interest,
      userName: userName,
      schedule: schedule,
    });
  }
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
              {`${city}${""}-${""}`} {state}
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            padding: 5,
            width: 90,
            height: 40,
            backgroundColor: "#31333C",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: -30,
          }}
          onPress={GoToCompanyProfile}
        >
          <Text style={{ color: "white" }}>Ver perfil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16171B",
    padding: 20,
    borderRadius: 10,
    height: 160,
    marginBottom: 10,
    justifyContent: "space-between",
    maxWidth: 325,
  },
  CardDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
