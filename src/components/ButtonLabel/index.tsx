import { Text, StyleSheet, View, Pressable } from "react-native";
import React from "react";

type ButtonLabelProps = {
  name: string;
};

type ButtonLabelVariableProps = {
  name: string;
  active: boolean
  onClick: () => void
};
export function ButtonLabel({ name }: ButtonLabelProps) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.textOn}>{name}</Text>
    </Pressable>
  );
}

export function ButtonLabelVariable({ name,active,onClick }: ButtonLabelVariableProps) {
  return (
    <Pressable onPress={onClick} style={active ? styles.button : styles.offButton}>
      <Text style={styles.textOn}>{name}</Text>
    </Pressable>
  );
}



const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#ECBD15",
    borderRadius: 6,
    fontWeight: "700",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },

  offButton: {
    padding: 10,
    backgroundColor: "#F3F3F3",
    borderRadius: 6,
    fontWeight: "700",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },

  textOn: {
    fontWeight: "700",
  },
});
