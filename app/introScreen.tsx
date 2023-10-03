import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import { Image, View, Dimensions } from "react-native";
import { Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";

function IntroScreen() {
  const router = useRouter();
  const WIDTH = Dimensions.get("window").width;

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
            height: "70%",
            display: "flex",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={require("../assets/images/dartLogo.png")}
            style={{ alignSelf: "center", aspectRatio: 1, height: "50%" }}
          />
          <View>
            <Text
              variant="titleLarge"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Plan Your Project Bigger
            </Text>
            <Text
              variant="headlineSmall"
              style={{ textAlign: "center", width: "100%" }}
            >
              Plan Your Project With A System
            </Text>
          </View>
          <Button
            style={{ width: WIDTH / 1.3, alignSelf: "center" }}
            mode="elevated"
            textColor={Colors.light.text}
            onPress={() => router.push("/authScreens/loginScreen")}
          >
            Get Started
          </Button>
        </View>
      </LinearGradient>
    </>
  );
}

export default IntroScreen;
