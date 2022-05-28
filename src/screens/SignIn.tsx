import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import arrow from "../../assets/arrow.png";
import logoCorre from "../../assets/iconCorre.png";
import React, { useState } from "react";
import { ButtonLabel } from "../components/ButtonLabel";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const [isActiveMusic, setIsActiveMusic] = useState<boolean>(false);
  const [isActiveBuffet, setIsActiveBuffet] = useState<boolean>(false);
  const [isActiveMarriage, setIsActiveMarriage] = useState<boolean>(false);
  const [isActiveWooden, setIsActiveWooden] = useState<boolean>(false);
  const [isActiveBarber, setIsActiveBarber] = useState<boolean>(false);
  const [isActiveTransport, setIsActiveTransport] = useState<boolean>(false);

  const navigation = useNavigation();
  function BacktoSubmit() {
    navigation.navigate("Welcome");
  }



  const typesOfService = [
    {
      id: 0,
      name: "Música",
      isActive: isActiveMusic,
      onClick: () => setIsActiveMusic(!isActiveMusic),
    },
    {
      id: 1,
      name: "Buffet",
      isActive: isActiveBuffet,
      onClick: () => setIsActiveBuffet(!isActiveBuffet),
    },
    {
      id: 2,
      name: "Casamento",
      isActive: isActiveMarriage,
      onClick: () => setIsActiveMarriage(!isActiveMarriage),
    },
    {
      id: 3,
      name: "Serralheiro",
      isActive: isActiveWooden,
      onClick: () => setIsActiveWooden(!isActiveWooden),
    },
    {
      id: 4,
      name: "Barbeiro",
      isActive: isActiveBarber,
      onClick: () => setIsActiveBarber(!isActiveBarber),
    },
    {
      id: 5,
      name: "Transporte",
      isActive: isActiveTransport,
      onClick: () => setIsActiveTransport(!isActiveTransport),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }} onPress={BacktoSubmit}>
          <Image style={{ marginRight: 10 }} source={arrow}></Image>
          <Text style={{ fontSize: 14, color: "white", fontWeight: "700" }}>
            Voltar
          </Text>
        </Pressable>
        <Image source={logoCorre} style={{ width: 45, height: 45 }} />
      </View>

      <View style={{marginBottom:-60, marginLeft:-40}}>
        <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Insira</Text>
        <Text style={{ fontSize: 24, color: "#ECBD15", fontWeight: "700" }}>
          Suas Informações aqui:
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={{ fontSize: 14, color: "white" }}>Nome Completo</Text>
          <TextInput
            placeholder="Digite aqui..."
            accessibilityLabel="Nome completo"
            style={styles.input}
          />
        </View>

        <View>
          <Text style={{ fontSize: 14, color: "white" }}>Endereço</Text>
          <TextInput
            placeholder="Digite aqui..."
            accessibilityLabel="Endereço"
            style={styles.input}
          />
        </View>

        <View>
          <Text style={{ fontSize: 14, color: "white" }}>
            O que você busca ?
          </Text>
          <TextInput
            placeholder="Digite aqui..."
            accessibilityLabel="O que você busca ?"
            style={styles.input}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 12,
            alignItems: "center",
            maxWidth: 320,
          }}
        >
          {typesOfService.map((items) => (
            <ButtonLabel {...items} />
          ))}
        </View>
        <View style={styles.SubmitArea}>
          <Pressable style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Registre-se</Text>
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
    justifyContent: 'space-between'
  },
  header: {
    width: "80%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  form: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#31333C",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
    width: "100%",
  },
  input: {
    maxWidth: 320,
    minWidth: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    padding: 20,
    marginBottom: 20,
  },
  SubmitArea: {
    marginTop: 50,
    marginBottom: 60
  },
  submitButton: {
    borderRadius: 4,
    alignItems: "center",
    padding: 10,
    width: 260,
    marginBottom: 10,
    backgroundColor: "#ECBD15",
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
