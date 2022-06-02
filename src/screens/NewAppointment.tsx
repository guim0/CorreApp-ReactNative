import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

type ParamProps = {
  nameCompany: string;
};

export function NewAppointment() {


  const routes = useRoute();
  const { nameCompany } = routes.params as ParamProps;

  const navigation = useNavigation();

  function backToCompanySchedule() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={backToCompanySchedule}
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
        Agende um horario 😉
      </Text>
      <View style={styles.Appointments}>
        <View>
          <Text style={{ fontSize: 14, color: "white" }}>Título do evento</Text>
          <TextInput
            placeholder="O que você quer fazer ?."
            accessibilityLabel="Agendamento"
            style={styles.input}
            // onChangeText={(NewName) => setName(NewName)}
          />
        </View>
 
        <Text style={{ fontSize: 14, color: "white" }}>Sugira um horário:</Text>
      
          
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
    justifyContent: "space-between",
  },
  header: {
    width: "80%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  Appointments: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#31333C",
    flexDirection: "column",
    padding: 25,
    alignItems: "baseline",
    paddingBottom: 120,
    marginTop: 10,
    width: "100%",
  },
  input: {
    maxWidth: 350,
    minWidth: 320,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    padding: 20,
    marginBottom: 20,
  },
});
