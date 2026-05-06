import React, { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";

export default function Exercicio03() {
  const cells = Array.from({ length: 9 });

  return (
    <View style={styles.container}>
      {cells.map((_, index) => (
        <Cell key={index} />
      ))}
    </View>
  );
}

function Cell() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Pressable
      style={[styles.cell, { backgroundColor: isActive ? "#6200ee" : "#ccc" }]}
      onPress={() => setIsActive(!isActive)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", 
    alignContent: "center",
    paddingTop: 50,
  },
  cell: {
    width: "33.33%", 
    height: 120,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
