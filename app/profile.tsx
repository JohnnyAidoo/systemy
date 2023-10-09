import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "../components/Themed";
import { Button } from "react-native-paper";
import { router } from "expo-router";

export default function Profile() {
  const handleLogOut = () => {
    AsyncStorage.removeItem("userId").then(() => {
      router.replace("/authScreens/loginScreen");
    });
  };

  return (
    <View>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button onPress={handleLogOut}>Log out</Button>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
