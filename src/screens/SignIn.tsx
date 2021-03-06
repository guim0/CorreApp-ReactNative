import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,

  useWindowDimensions,
  Platform
} from "react-native";

import React, { useState } from "react";
import { ButtonLabel } from "../components/ButtonLabel";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const [name, setName] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [interestsItems, setInterestItems] = useState([]);
  const {width, height} = useWindowDimensions()

  const navigation = useNavigation();
  function BacktoSubmit() {
    navigation.navigate("Welcome");
  }

  function GoToHome() {
    navigation.navigate("Home", { name: name });
  }

  const handleInterest = () => {
    //@ts-ignore
    setInterestItems([...interestsItems, interest]);
    setInterest("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={BacktoSubmit}
        >
          <Image
            style={{ marginRight: 10 }}
            source={require("../assets/arrow.png")}
          ></Image>
          <Text style={{ fontSize: 14, color: "white", fontWeight: "700" }}>
            Voltar
          </Text>
        </Pressable>
        <Image
          source={require("../assets/iconCorre.png")}
          style={{ width: 45, height: 45 }}
        />
      </View>
      {interest !== "" && (
        <Text style={{ color: "white" }}> Você digitou: {interest}</Text>
      )}

      <View style={{ marginBottom: -30, marginLeft: -40 }}>
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
            onChangeText={(NewName) => setName(NewName)}
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
            onChangeText={(newText) => setInterest(newText)}
            value={interest}
            onSubmitEditing={handleInterest}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 12,
            alignItems: "center",
            maxWidth: 350,
            marginTop: 20,
          }}
        >
          {interestsItems.map((items) => {
            return <ButtonLabel name={items} />;
          })}
        </View>

        <View style={styles.ClearFilters}>
          <Pressable onPress={() => setInterestItems([])}>
            <Text style={{ color: "white" }}>Limpar Filtros</Text>
          </Pressable>
        </View>

        <View style={styles.SubmitArea}>
          {name !== "" ? (
            <Pressable style={styles.submitButton} onPress={GoToHome}>
              <Text style={styles.submitButtonText}>Registre-se</Text>
            </Pressable>
          ) : (
            <View style={styles.submitButtonDisable}>
              <Text style={styles.submitButtonText}>Registre-se</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS !== 'ios' ? 5 : 50,
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
    maxWidth: 350,
    minWidth: 320,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    padding: 20,
    marginBottom: 20,
    fontSize: Platform.OS === 'ios' ? 14 : 16,
    height: Platform.OS !== 'ios' ? 60 : 65,
  },
  SubmitArea: {
    marginTop: 20,
    marginBottom: Platform.OS !== 'ios' ? 30 : 40,
  },
  submitButton: {
    borderRadius: 4,
    alignItems: "center",
    padding: 10,
    width: 260,
    marginBottom: 10,
    backgroundColor: "#ECBD15",
  },
  submitButtonDisable: {
    borderRadius: 4,
    alignItems: "center",
    padding: 10,
    width: 260,
    marginBottom: 10,
    backgroundColor: "#ECBD15",
    opacity: 0.2,
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: "700",
  },
  ClearFilters: {
    padding: 5,
  },
});
