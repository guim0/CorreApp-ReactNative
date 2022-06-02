import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
  Platform,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonLabel, ButtonLabelVariable } from "../components/ButtonLabel";

type ParamProps = {
  nameCompany: string;
};

export function NewAppointment() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [activeSeg, setIsActiveSeg] = useState(false);
  const [activeTer, setIsActiveTer] = useState(false);
  const [activeQua, setIsActiveQua] = useState(false);
  const [activeQui, setIsActiveQui] = useState(false);
  const [activeSex, setIsActiveSex] = useState(false);
  const [activeSab, setIsActiveSab] = useState(false);

  const [activeHour1, setIsActiveHour1] = useState(false);
  const [activeHour2, setIsActiveHour2] = useState(false);
  const [activeHour3, setIsActiveHour3] = useState(false);
  const [activeHour4, setIsActiveHour4] = useState(false);
  const [activeHour5, setIsActiveHour5] = useState(false);
  const [activeHour6, setIsActiveHour6] = useState(false);
  const [activeHour7, setIsActiveHour7] = useState(false);
  const DaysOfTheWeek = [
    {
      key: 0,
      name: "Seg",
      active: activeSeg,
      onClick: () => {
        setIsActiveSeg(!activeSeg);
      },
    },
    {
      key: 1,
      name: "Ter",
      active: activeTer,
      onClick: () => {
        setIsActiveTer(!activeTer);
      },
    },
    {
      key: 2,
      name: "Qua",
      active: activeQua,
      onClick: () => {
        setIsActiveQua(!activeQua);
      },
    },
    {
      key: 3,
      name: "Qui",
      active: activeQui,
      onClick: () => {
        setIsActiveQui(!activeQui);
      },
    },
    {
      key: 4,
      name: "Sex",
      active: activeSex,
      onClick: () => {
        setIsActiveSex(!activeSex);
      },
    },
    {
      key: 5,
      name: "Sab",
      active: activeSab,
      onClick: () => {
        setIsActiveSab(!activeSab);
      },
    },
  ];

  const HoursNeed = [
    {
      key: 0,
      name: "08:00 à 09:00",
      active: activeHour1,
      onClick: () => {
        setIsActiveHour1(!activeHour1);
      },
    },
    {
      key: 1,
      name: "10:00 à 11:00",
      active: activeHour2,
      onClick: () => {
        setIsActiveHour2(!activeHour2);
      },
    },
    {
      key: 2,
      name: "11:00 à 12:00",
      active: activeHour3,
      onClick: () => {
        setIsActiveHour3(!activeHour3);
      },
    },
    {
      key: 3,
      name: "14:00 à 15:00",
      active: activeHour4,
      onClick: () => {
        setIsActiveHour4(!activeHour4);
      },
    },
    {
      key: 4,
      name: "16:00 à 17:00",
      active: activeHour5,
      onClick: () => {
        setIsActiveHour5(!activeHour5);
      },
    },
    {
      key: 5,
      name: "18:00 à 19:00",
      active: activeHour6,
      onClick: () => {
        setIsActiveHour6(!activeHour6);
      },
    },
    {
      key: 6,
      name: "20:00 à 21:00",
      active: activeHour6,
      onClick: () => {
        setIsActiveHour6(!activeHour6);
      },
    },
  ];
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
          />
        </View>

        <Text style={{ fontSize: 16, color: "white", marginTop: 20 }}>
          Sugira um dia da semana:
        </Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap", width: "103%" }}>
          {DaysOfTheWeek.map((items) => (
            <Pressable key={items.key}>
              <ButtonLabelVariable {...items} />
            </Pressable>
          ))}
        </View>
        <Text style={{ fontSize: 16, color: "white", marginTop: 40 }}>
          Sugira um Horário:
        </Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {HoursNeed.map((items) => (
            <Pressable style={{ marginRight: 10, width: 150 }} key={items.key}>
              <ButtonLabelVariable {...items} />
            </Pressable>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 16, color: "white", paddingTop: 40 }}>
            Atendimento Domiciliar
          </Text>
          <View style={{ paddingTop: 35 }}>
            <Switch
              trackColor={{ false: "#767577", true: "#ECBD15" }}
              thumbColor={isEnabled ? "#0D0D0D" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={{width:"100%"}}>
          <Pressable
            style={{
              padding: 20,
              backgroundColor: "#ECBD15",
              borderRadius: 8,
              alignItems: "center",
              marginTop:30,
             
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Enviar Solicitação
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
    paddingBottom: 30,
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
