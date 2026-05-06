import React, { createContext, useContext } from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

const ThemeContext = createContext();

const lightColors = { background: "#ffffff", text: "#000000", card: "#f0f0f0" };
const darkColors = { background: "#121212", text: "#ffffff", card: "#1e1e1e" };

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.box, { backgroundColor: theme.card }]}>
      <Text style={{ color: theme.text }}>Claro ou Escuro</Text>
    </View>
  );
}

export default function Exercicio07() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={theme}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <ThemedComponent />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  box: { padding: 20, borderRadius: 8, elevation: 2 },
});
