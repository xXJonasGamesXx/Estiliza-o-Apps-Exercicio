import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Exercicio01() {
  return (
    <View style={styles.container}>
      {}
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/caracol-86593483.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.titulo}>Cartão</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkblue",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 250,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
