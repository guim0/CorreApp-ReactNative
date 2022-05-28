import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import React from 'react'

export function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, color:"#ECBD15"}}>SignIn</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      paddingTop: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0D0D0D",
    },
   
  });
  