import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  useColorScheme,
  Platform,
} from "react-native";

export default function Exercicio10() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const theme = {
    bg: isDark ? "#121212" : "#f0f2f5",
    cardBg: isDark ? "#1e1e1e" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    gray: isDark ? "#aaaaaa" : "#666666",
  };

  const posts = Array.from({ length: 12 }, (_, i) => ({ id: i.toString() }));

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      {}
      <View
        style={[
          styles.headerCard,
          { backgroundColor: theme.cardBg },
          styles.shadow,
        ]}
      >
        <Image
          source={{
            uri: "https://images.freeimages.com/cme/images/previews/b73/free-spongebob-vector-27398.png",
          }}
          style={styles.avatar}
        />
        <Text style={[styles.name, { color: theme.text }]}>Bope Esponcha</Text>
        <Text style={{ color: theme.gray }}>caço agua viva</Text>

        {}
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={[styles.statNum, { color: theme.text }]}>12</Text>
            <Text style={{ color: theme.gray }}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statNum, { color: theme.text }]}>300</Text>
            <Text style={{ color: theme.gray }}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statNum, { color: theme.text }]}>150</Text>
            <Text style={{ color: theme.gray }}>Seguindo</Text>
          </View>
        </View>

        {}
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
        >
          <Text style={styles.buttonText}>Seguir</Text>
        </Pressable>
      </View>

      {}
      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
        renderItem={() => (
          <View
            style={[
              styles.postSquare,
              { backgroundColor: theme.cardBg },
              styles.shadow,
            ]}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Platform.OS === "android" ? 40 : 20 },
  shadow: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    android: { elevation: 3 },
  }),
  headerCard: {
    margin: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 2 },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  stat: { alignItems: "center" },
  statNum: { fontSize: 18, fontWeight: "bold" },
  button: {
    backgroundColor: "yellow",
    width: "100%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "black", fontWeight: "bold", fontSize: 16 },
  postSquare: { flex: 1, aspectRatio: 1, margin: 5, borderRadius: 8 },
});
