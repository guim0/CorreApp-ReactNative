import { View, Text, StyleSheet } from "react-native";
import React from "react";

type ServiceViewProps = {
  timeStart: string;
  timeEnd: string;
  title: string;
  description: string;
  late: boolean;
};
export function ServiceView({
  timeStart,
  timeEnd,
  title,
  description,
  late,
}: ServiceViewProps) {
  return (
    <View>
      <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700", marginTop:20 }}>
          {timeStart}
        </Text>
      </View>
      <View style={late ? styles.containerLate : styles.containerSoon}>
        <Text
          style={late ? styles.timeLate : styles.timeSoon}
        >{`${timeStart} - ${timeEnd}`}</Text>
        <Text style={late ? styles.titleLate : styles.titleSoon}>{title}</Text>
        <Text style={late ? styles.descriptionLate : styles.descriptionSoon}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSoon: {
    padding: 15,
    backgroundColor: "#ECBD15",
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 15,
  },
  containerLate: {
    padding: 15,
    backgroundColor: "#16171B",
    borderColor: "#ECBD15",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 15,
  },
  timeSoon: {
    color: "#0D0D0D",
    fontSize: 14,
    marginBottom:10
  },
  timeLate: {
    color: "#ECBD15",
    fontSize: 14,
    marginBottom:10
  },
  titleSoon: {
    color: "#0D0D0D",
    fontWeight: "700",
    fontSize: 20,
    marginBottom:10
  },
  titleLate: {
    color: "#ECBD15",
    fontWeight: "700",
    fontSize: 20,
    marginBottom:10
  },
  descriptionSoon: {
    color: "#0D0D0D",
    fontSize: 16,
  },
  descriptionLate: {
    color: "#ECBD15",
    fontSize: 16,
  },
});
