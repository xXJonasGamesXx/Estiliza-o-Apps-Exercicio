import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

export default function Exercicio06() {
  const { width } = useWindowDimensions();

  const isLandscape = width > 500;
  const numColumns = isLandscape ? 2 : 1;
  const cardWidth = (width - 40) / numColumns;
  const cards = [1, 2];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.map((item) => (
        <View
          key={item}
          style={[styles.card, { width: cardWidth - 10, margin: 5 }]}
        >
          <Text style={styles.texto}>Card {item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    marginTop: 40,
  },
  card: {
    height: 150,
    backgroundColor: "#03dac6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  texto: { fontWeight: "bold", fontSize: 18 },
});
