import { useRouter } from "expo-router";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      <View style={styles.header}>
        <Ionicons name="document-text-outline" size={80} color="#fff" />
        <Text style={styles.title}>Notes App</Text>
        <Text style={styles.subtitle}>
          Organize your thoughts, ideas, and tasks in one beautiful place.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/login" as any)}
        >
          <Ionicons name="log-in-outline" size={20} color="#fff" />
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/register" as any)}
        >
          <Ionicons name="person-add-outline" size={20} color="#667eea" />
          <Text style={styles.secondaryButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.features}>
        <View style={styles.feature}>
          <Ionicons name="create-outline" size={24} color="#fff" />
          <Text style={styles.featureText}>Create Notes</Text>
        </View>
        <View style={styles.feature}>
          <Ionicons name="search-outline" size={24} color="#fff" />
          <Text style={styles.featureText}>Search & Filter</Text>
        </View>
        <View style={styles.feature}>
          <Ionicons name="folder-outline" size={24} color="#fff" />
          <Text style={styles.featureText}>Categorize</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#667eea",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#E8EAF6",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  primaryButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  primaryButtonText: {
    color: "#667eea",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  secondaryButton: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#fff",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  feature: {
    alignItems: "center",
  },
  featureText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "500",
  },
});
