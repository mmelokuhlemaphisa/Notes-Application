import { Stack } from "expo-router";
import React from "react";
import { AuthProvider, useAuth } from "../utils/auth";

function RootLayoutNav() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="HomeScreen" />
          <Stack.Screen name="AddNoteScreen" />
          <Stack.Screen name="ViewNoteScreen" />
          <Stack.Screen name="EditNoteScreen" />
          <Stack.Screen name="ProfileScreen" />
        </>
      ) : (
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
