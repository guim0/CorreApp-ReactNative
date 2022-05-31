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
      title: "Espaço negrahSoul",
      interest: "Trancista",
      city: "Itaquaquecetuba",
      state: "SP",
      homeService: true,
      badges: [
        {
          name: "Casamento",
        },
        {
          name: "Festas",
        },
        {
          name: "Espaço empoderado",
        },
        {
          name: "Para todos",
        },
        {
          name: "Atendimento à domicìlio",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nunc orci, non mollis nibh tempus ac. Quisque quis sem ac elit commodo blandit nec ut est",
    },
    {
      key: 1,
      title: "Romeu dos anjos",
      interest: "Música",
      city: "Guarulhos",
      state: "SP",
      homeService: true,
      badges: [
        {
          name: "Casamento",
        },
        {
          name: "Festas",
        },
        {
          name: "Ambiente de alegria",
        },
        {
          name: "Para todos",
        },
        {
          name: "Evento",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nunc orci, non mollis nibh tempus ac. Quisque quis sem ac elit commodo blandit nec ut est",
    },
    {
      key: 2,
      title: "Artisings masters cube",
      interest: "Desenho/arte",
      city: "Itaim Paulista",
      state: "SP",
      homeService: false,
      badges: [
        {
          name: "Empresas",
        },
        {
          name: "Logos",
        },
        {
          name: "StartUp",
        },
        {
          name: "Para todos",
        },
        {
          name: "Branding",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nunc orci, non mollis nibh tempus ac. Quisque quis sem ac elit commodo blandit nec ut est",
    },
    {
      key: 3,
      title: "Heart - a paixão está no ar",
      interest: "Música",
      city: "Suzano",
      state: "SP",
      homeService: false,
      badges: [
        {
          name: "Casamento",
        },
        {
          name: "Festas",
        },
        {
          name: "Ambiente de alegria",
        },
        {
          name: "Para todos",
        },
        {
          name: "Evento",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nunc orci, non mollis nibh tempus ac. Quisque quis sem ac elit commodo blandit nec ut est",
    },
    {
      key: 4,
      title: "Programação e estrutura HTML",
      interest: "Tecnologia",
      city: "São Miguel Paulista",
      state: "SP",
      homeService: false,
      badges: [
        {
          name: "Oportunidade",
        },
        {
          name: "Inovação",
        },
        {
          name: "Ambiente de alegria",
        },
        {
          name: "Para todos",
        },
        {
          name: "Evento",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nunc orci, non mollis nibh tempus ac. Quisque quis sem ac elit commodo blandit nec ut est",
    },
    {
      key: 5,
      title: "Barbearia Soares",
      interest: "Serviços",
      city: "Guarulhos",
      state: "SP",
      homeService: true,
      badges: [
        {
          name: "Casamentos",
        },
        {
          name: "Eventos",
        },
        {
          name: "Espaço empoderado",
        },
        {
          name: "Para todos",
        },
        {
          name: "Atendimento à domicilio",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nunc orci, non mollis nibh tempus ac. Quisque quis sem ac elit commodo blandit nec ut est",
    },
    {
      key: 6,
      title: "Zumba ao ar livre",
      interest: "Exercicio",
      city: "Guarulhos",
      state: "SP",
      homeService: false,
      typeService: [
        {
          name: "",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus nunc orci, non mollis nibh tempus ac. Quisque quis sem ac elit commodo blandit nec ut est",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 20 }}>
        <SearchInput userName={name} />
      </View>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        {MockedOppotunity.map((items) => (
          <CardOppotunity userName={name} {...items} />
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
