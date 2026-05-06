import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Exercicio02() {
  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <Text style={styles.headerTexto}>Header Fixo</Text>
      </View>

      {}
      <View style={styles.conteudo}>
        <Text style={styles.conteudoTexto}>Tem flex: 1</Text>
      </View>

      {}
      <TouchableOpacity style={styles.absoluteButton}>
        <Text style={styles.buttonTexto}>Botão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  conteudo: {
    flex: 1,
    backgroundColor: "#e0f7fa",
  },
  conteudoTexto: {
    fontSize: 16,
    color: "#333",
  },
  absoluteButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#03dac6",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonTexto: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
});
