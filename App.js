import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>ReadyLanka</Text>
      <Text style={styles.subtitle}>Offline emergency safety companion</Text>
      <Text style={styles.message}>Project setup is ready.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F4F7F5", padding: 24 },
  title: { color: "#17352C", fontSize: 32, fontWeight: "900" },
  subtitle: { color: "#176B52", fontSize: 15, fontWeight: "700", marginTop: 8 },
  message: { color: "#6B7C75", marginTop: 24 }
});
