import { Text, StyleSheet, View, Pressable } from "react-native";
import React, { Component } from "react";

type ButtonLabelProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

export function ButtonLabel({ isActive, name, onClick }: ButtonLabelProps) {
  return (
    <Pressable
      onPress={onClick}
      style={isActive ? styles.button : styles.nonActive}
    >
      <Text style={isActive ?  styles.textOn : styles.textOff}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#ECBD15",
    borderRadius: 6,
    fontWeight: '700',
    alignItems: "center",
    marginRight:10,
    marginTop:10
  },
  nonActive: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    alignItems: "center",
    marginRight:10,
    marginTop:10
  },
  textOn: {
    fontWeight: '700'
  },
  textOff: {
    fontWeight: '400'
  }
});
