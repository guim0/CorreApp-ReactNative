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
};

export function CompanyProfile() {
  const route = useRoute();
  const { nameCompany, userName, interest, state, city, badges, description } =
    route.params as ParamProps;
  const navigation = useNavigation();
  function BacktoList() {
    navigation.navigate("Home", { name: userName });
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
          fontSize: 35,
          marginTop: 30,
          fontWeight: "600",
        }}
      >
        {nameCompany}
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "flex-start", width: "90%" }}
      >
        <View style={{ marginTop: 30 }}>
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
              marginTop: 10,
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
          style={{ marginLeft: -20, width: 120, height: 180, marginTop: 50 }}
          source={require("../assets/companyNameIcon.png")}
        />
      </View>

      <View style={styles.companyDetails}>
        <Text
          style={{
            color: "#ECBD15",
            fontSize: 20,
            fontWeight: "700",
            marginBottom: 20,
          }}
        >
          DESCRIÇÃO
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          {nameCompany}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 25,
            marginBottom: 10
          }}
        >
          {description}
        </Text>
        <View>
          <Pressable style={styles.buttonVisit}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#0D0D0D" }}>
              Marcar uma visita
            </Text>
          </Pressable>
          <Pressable style={styles.buttonWpp}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#ECBD15" }}>
              Chamar no WhatsApp{" "}
              <Image source={require("../assets/whatsapp.png")} />
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
    width: "80%",
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
    width: "100%",
  },
  buttonVisit: {
    padding: 20,
    backgroundColor: "#ECBD15",
    width: 300,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15
  },
  buttonWpp: {
    padding: 20,
    backgroundColor: "#0D0D0D",
    width: 300,
    borderRadius: 8,
    alignItems: "center",
  },
});
