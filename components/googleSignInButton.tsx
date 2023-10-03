import { Image, Pressable } from "react-native";
import { Surface, Text } from "react-native-paper";

function GoogleSignIn() {
  return (
    <Pressable onPress={() => {}}>
      <Surface
        style={{
          aspectRatio: 55 / 9,
          width: "80%",
          borderRadius: 20,
          alignSelf: "center",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          source={require("../assets/images/icon/googleIcon.png")}
          style={{ aspectRatio: 1, width: 20 }}
        />
        <Text
          style={{ textAlign: "center", color: "black", fontWeight: "bold" }}
        >
          Sign In With Google
        </Text>
      </Surface>
    </Pressable>
  );
}

export default GoogleSignIn;
