// LandingPage.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>React Native Notes</Text>
      <Text style={styles.subtitle}>
        Organize your thoughts, manage notes, and stay productive.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.registerButton]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={[styles.buttonText, styles.registerButtonText]}>
          Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.infoButtonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D54A4", 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#DADADA",
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 25,
  },
  button: {
    width: "80%",
    backgroundColor: "white",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  buttonText: {
    color: "#5D54A4",
    fontSize: 18,
    fontWeight: "600",
  },
  registerButton: {
    backgroundColor: "#fff",
  },
  registerButtonText: {
    color: "#5D54A4",
    fontWeight: "700",
  },
  infoButton: {
    marginTop: 25,
  },
  infoButtonText: {
    color: "#fff",
    fontSize: 16,
    textDecorationLine: "underline",
    fontWeight: "500",
  },
});
