import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Exercicio04() {
  return (
    <View style={styles.container}>
      {}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.7, transform: [{ scale: 0.97 }] },
        ]}
      >
        <Text style={styles.texto}>Botão Pressable</Text>
      </Pressable>

      {}
      <TouchableOpacity style={[styles.button, styles.buttonOld]}>
        <Text style={styles.texto}>Botão TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    backgroundColor: "#6200ee",
    padding: 20,
    borderRadius: 8,
    width: 200,
    alignItems: "center",
  },
  buttonOld: {
    marginTop: 30,
    backgroundColor: "#03dac6",
  },
  texto: { color: "white", fontWeight: "bold" },
});
