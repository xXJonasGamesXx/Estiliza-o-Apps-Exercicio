import React, { useEffect, useRef, useState } from "react";
import { View, Animated, StyleSheet, Easing, Button, Text } from "react-native";

export default function Exercicio09() {
  const [progress, setProgress] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 600,
      easing: Easing.easeOut,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ["#4caf50", "#ffeb3b", "#f44336"],
  });

  const width = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Progresso: {progress}%</Text>

      <View style={styles.barContainer}>
        <Animated.View style={[styles.bar, { width, backgroundColor }]} />
      </View>

      <Button
        title="+ 25%"
        onPress={() => setProgress((p) => Math.min(p + 25, 100))}
      />
      <View style={{ height: 10 }} />
      <Button title="Zerar" color="#888" onPress={() => setProgress(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  barContainer: {
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  bar: { height: "100%" },
});
