import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SearchInput } from "../components/SearchLabel";
import { CardOppotunity } from "../components/CardOpportunity";

type ParamProps = {
  name: string;
};

export function Home() {
  const routes = useRoute();

  const { name } = routes.params as ParamProps;

  const MockedOppotunity = [
    {
      key: 0,
      title: "Romeu dos anjos",
      interest: "Música",
      city: "Guarulhos",
      state: "SP",
    },
    {
      key: 1,
      title: "Artisings masters cube",
      interest: "Desenho/arte",
      city: "Itaim Paulista",
      state: "SP",
    },
    {
      key: 2,
      title: "Heart - a paixão está no ar",
      interest: "Música",
      city: "Suzano",
      state: "SP",
    },
    {
      key: 3,
      title: "Programação e estrutura HTML",
      interest: "Tecnologia",
      city: "São Miguel Paulista",
      state: "SP",
    },
    {
      key: 4,
      title: "Leitura de Mangas Junji Ito",
      interest: "Arte",
      city: "Liberdade",
      state: "SP",
    },
    {
      key: 5,
      title: "Zumba ao ar livre",
      interest: "Exercicio",
      city: "Guarulhos",
      state: "SP",
    },
    {
      key: 6,
      title: "Barbearia Soares",
      interest: "Serviços",
      city: "Pimentas",
      state: "SP",
    },
    {
      key: 7,
      title: "Manutenção Eletríca",
      interest: "Serviços",
      city: "Barueri",
      state: "SP",
    },
    {
      key: 8,
      title: "Serralheiro",
      interest: "Serviços",
      city: "Itaquaquecetuba",
      state: "SP",
    },
    {
      key: 9,
      title: "Mecânico Simas Turbo",
      interest: "Serviços",
      city: "Osasco",
      state: "SP",
    },
    {
      key: 10,
      title: "Coleta de Agasalhos",
      interest: "Serviços",
      city: "São paulo",
      state: "SP",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{paddingBottom: 20}}>
        <SearchInput userName={name} />
      </View>
      <ScrollView contentContainerStyle={{width:'100%'}}>
        {MockedOppotunity.map((items) => (
          <CardOppotunity {...items} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
  },
});
