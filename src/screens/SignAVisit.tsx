import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ServiceView } from "../components/ServicesView";

type ParamProps = {
  nameCompany: string;
  schedule: {
    timeStart: string;
    timeEnd: string;
    title: string;
    description: string;
    late: boolean;
  }[];
};

export function SignAVisit() {
  const routes = useRoute();
  const { nameCompany, schedule } = routes.params as ParamProps;

  const navigation = useNavigation();

  function goToNewApointment(){
    navigation.navigate("NewAppointments",{nameCompany:nameCompany})
  }
  function BackToCompanyDetails() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={BackToCompanyDetails}
        >
          <Image
            style={{ marginRight: 10 }}
            source={require("../assets/arrow.png")}
          />
          <Text style={{ color: "white", fontSize: 15, fontWeight: "700" }}>
            {nameCompany}
          </Text>
        </Pressable>
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        Compromissos
      </Text>
      <View style={styles.schedules}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ maxWidth: 280 }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ fontSize: 40, color: "#ECBD15", fontWeight: "700" }}
              >
                02
              </Text>
              <Text style={{ fontSize: 25, color: "white" }}>Qui</Text>
            </View>
            <View style={styles.currentWorks}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
                Hoje
              </Text>
              <Text style={{ color: "white" }}>
                {schedule.length} serviços agendados
              </Text>
            </View>
            <Pressable onPress={goToNewApointment}>
              <Image
                style={{ width: 60, height: 60 }}
                source={require("../assets/AddVisit.png")}
              />
            </Pressable>
          </View>
          <View style={styles.details}>
            <View>
              {schedule.map((items) => (
                <ServiceView {...items} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0D0D0D",
  },
  header: {
    width: "80%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  schedules: {
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
  currentWorks: {},
  details: {
    marginTop: 30,
    width: "100%",
  },
});
