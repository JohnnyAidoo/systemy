import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";

function WelcomeScreen() {
  const router = useRouter();

  return (
    <>
      <LinearGradient
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        colors={[Colors.ctrColor1, Colors.ctrColor2]}
      >
        <View
          style={{
            height: "75%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/images/dartLogo.png")}
            style={{ alignSelf: "center", aspectRatio: 1, height: "40%" }}
          />
          <Text
            variant="titleLarge"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Welcome Johnny
          </Text>
          <View>
            <Text variant="headlineSmall" style={{ textAlign: "center" }}>
              Create , Organize , Plan
            </Text>
            <Text variant="headlineSmall" style={{ textAlign: "center" }}>
              Your Project With SYSTEMY
            </Text>
          </View>
          <View>
            <Text style={{ alignSelf: "center", paddingBottom: 10 }}>
              let's create your first project
            </Text>
            <Button
              mode="elevated"
              textColor={Colors.light.text}
              onPress={() => router.push("/(tabs)")}
            >
              Get Started
            </Button>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

export default WelcomeScreen;
