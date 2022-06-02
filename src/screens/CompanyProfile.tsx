import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonLabel } from "../components/ButtonLabel";

type ParamProps = {
  userName: string;
  nameCompany: string;
  interest: string;
  city: string;
  state: string;
  badges: {
    name: string;
  }[];
  description: string;
  homeService: boolean;
  schedule: {
    timeStart: string;
    timeEnd: string;
    title: string;
    description: string;
    late: boolean;
  }[];
};

export function CompanyProfile() {
  const route = useRoute();
  const {
    nameCompany,
    userName,
    interest,
    state,
    city,
    badges,
    description,
    schedule,
  } = route.params as ParamProps;
  const navigation = useNavigation();
  function BacktoList() {
    navigation.navigate("Home", { name: userName });
  }

  function goSignAVisit() {
    navigation.navigate("SignAVisit", {
      nameCompany: nameCompany,
      schedule: schedule,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={BacktoList}
        >
          <Image
            style={{ marginRight: 10 }}
            source={require("../assets/arrow.png")}
          />
        </Pressable>
      </View>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 30,
          marginTop: 20,
          fontWeight: "600",
        }}
      >
        {nameCompany}
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "flex-start", width: "90%" }}
      >
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ marginRight: 10 }}
              source={require("../assets/work-alt.png")}
            />
            <Text style={{ fontSize: 16, color: "white" }}>{interest}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Image
              style={{ marginRight: 10 }}
              source={require("../assets/location.png")}
            />

            <Text style={{ fontSize: 16, color: "white" }}>
              {`${city} ${""} - ${""}`} {state}
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", width: 280 }}>
            {badges.map((items) => (
              <ButtonLabel {...items} />
            ))}
          </View>
        </View>
        <Image
          style={{ marginLeft: -30, width: 120, height: 150, marginTop: 30 }}
          source={require("../assets/companyNameIcon.png")}
        />
      </View>

      <View style={styles.companyDetails}>
        <Text
          style={{
            color: "#ECBD15",
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          DESCRIÇÃO
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          {nameCompany}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "400",
            lineHeight: 25,
          }}
        >
          {description}
        </Text>
        <View>
          <Pressable style={styles.buttonVisit} onPress={goSignAVisit}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#0D0D0D" }}>
              Marcar uma visita
            </Text>
          </Pressable>
          <Pressable style={styles.buttonWpp}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#ECBD15",
                alignItems: "baseline",
              }}
            >
              Chamar no WhatsApp{" "}
              <Image
                style={{ width: 16, height: 16 }}
                source={require("../assets/whatsapp.png")}
              />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  header: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  companyDetails: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#31333C",
    flexDirection: "column",
    padding: 40,
    alignItems: "baseline",
    paddingBottom: 120,
    marginTop: 10,
    width: "100%",
  },
  buttonVisit: {
    padding: 20,

    backgroundColor: "#ECBD15",
    width: 300,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonWpp: {
    padding: 20,
    backgroundColor: "#0D0D0D",
    width: 300,
    borderRadius: 8,
    alignItems: "center",
  },
});
