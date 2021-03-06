import React from "react";
import { View, StyleSheet, Text, Image, Pressable, Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();
  function goToSignIn() {
    navigation.navigate("SignIn");
  }

  return (
    <View style={styles.container}>
      <View style={styles.clouds}>
        <Image
          source={require("../assets/clouds.png")}
          width={150}
          height={150}
        />
      </View>
      <View style={styles.icon}>
        <Image
          source={require("../assets/iconCorre.png")}
          width={150}
          height={150}
        />
      </View>

      <View style={styles.description}>
        <Text style={{ color: "#ECBD15", fontSize: 20, fontWeight: "700" }}>
          !CORRE
        </Text>
        <Text style={styles.titleText}>Olá, seja bem vindx!</Text>
        <Text style={{ fontSize:  Platform.OS ===  'ios' ? 14 : 16, color: "#C6C6C6" }}>
         Somos uma solução focada em serviços e prestações dos mesmos, para você usuario encontrar o que precisa!
        </Text>
      </View>
      <View style={styles.SubmitOrRegister}>
        <Pressable style={styles.registerButton} onPress={goToSignIn}>
          <Text style={{ fontSize:  20, fontWeight: "700" }}>Registre-se</Text>
        </Pressable>
        <View style={{alignItems:"center"}}>
          <Text
            style={{
              fontSize: Platform.OS ===  'ios' ? 14 : 16,
              color: "#F3F3F3",
            }}
          >
           Já tem uma conta? {" "}
            <Pressable style={{ marginBottom: Platform.OS === 'ios' ? -2 : 0,}}>
              <Text
                style={{
                  color: "#ECBD15",
                  fontSize: Platform.OS ===  'ios' ? 14 : 16,
                  textDecorationColor: "#ECBD15",
                  textDecorationLine: "underline",
                  lineHeight: Platform.OS === 'ios' ? 0 : 1
                }}
              >
                Entre Aqui!
              </Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: 60,
  },
  clouds: {
    position: "absolute",
    top: 70,
    left: -5,
  },

  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  description: {
    width: 265,
    textAlign: "justify",
  },
  titleText: {
    color: "#F3F3F3",
    fontSize: 24,
    fontWeight: "700",
  },

  SubmitOrRegister: {
    marginTop: 60,
  },
  registerButton: {
    borderRadius: 4,
    alignItems: "center",
    padding: 10,
    width: Platform.OS ===  'ios' ? 300 : 350,
    marginBottom: 20,
    backgroundColor: "#ECBD15",
  },
});
