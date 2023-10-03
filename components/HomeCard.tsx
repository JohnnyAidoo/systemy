import { Surface, Text } from "react-native-paper";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View } from "react-native";

function HomeCard() {
  return (
    <Pressable onPress={() => {}}>
      <Surface
        style={{
          margin: 5,
          aspectRatio: 4 / 3,
          width: 170,
        }}
      >
        <LinearGradient
          colors={[Colors.ctrColor1, Colors.ctrColor2]}
          style={{
            width: "100%",
            height: "65%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            variant="headlineLarge"
            style={{ fontWeight: "bold", color: Colors.light.background }}
          >
            NEW
          </Text>
        </LinearGradient>
        <View style={{ paddingHorizontal: 10 }}>
          <Text variant="titleMedium">title</Text>
          <Text variant="labelSmall">desciption</Text>
        </View>
      </Surface>
    </Pressable>
  );
}

export default HomeCard;
