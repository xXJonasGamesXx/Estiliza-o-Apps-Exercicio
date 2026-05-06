import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function Exercicio05() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTexto}>Header Específico</Text>
      </View>
      <View style={styles.conteudo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "white",
        alignItems: "center",
      },
      android: {
        backgroundColor: "#6200ee",
        alignItems: "flex-start",
      },
    }),
  },
  headerTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: Platform.OS === "android" ? "white" : "black",
  },
  conteudo: { flex: 1 },
});
