import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";
import Colors from "../../constants/Colors";
import { useState } from "react";
import { router } from "expo-router";
import GoogleSignIn from "../../components/googleSignInButton";
function SignUpScreen() {
  const [showPassword, setShowPasword] = useState<boolean>(false);

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ height: "60%", justifyContent: "space-between" }}>
        {/* username input */}
        <TextInput
          mode="outlined"
          placeholder="username"
          placeholderTextColor={"grey"}
          activeOutlineColor={Colors.ctrColor2}
          cursorColor="black"
          left={<TextInput.Icon icon="account" color={Colors.light.text} />}
        />
        {/* email input */}
        <TextInput
          mode="outlined"
          placeholder="email"
          placeholderTextColor={"grey"}
          activeOutlineColor={Colors.ctrColor2}
          cursorColor="black"
          left={<TextInput.Icon icon="email" color={Colors.light.text} />}
        />

        {/* password input  */}
        <TextInput
          mode="outlined"
          placeholder="password"
          placeholderTextColor={"grey"}
          activeOutlineColor={Colors.ctrColor2}
          cursorColor="black"
          secureTextEntry={showPassword}
          left={<TextInput.Icon icon="lock" color={Colors.light.text} />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              color={Colors.light.text}
              onPress={() => {
                setShowPasword(!showPassword);
              }}
            />
          }
        />

        <Button
          mode="elevated"
          buttonColor={Colors.ctrColor1}
          textColor={Colors.light.background}
          style={{ width: "80%", alignSelf: "center" }}
          onPress={() => router.push("/welcomeScreen")}
        >
          Sign Up
        </Button>

        {/* sign with google */}

        {/* divider */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Divider style={{ width: "40%", backgroundColor: "black" }} />
          <Text variant="bodyMedium">or</Text>
          <Divider style={{ width: "40%", backgroundColor: "black" }} />
        </View>

        <GoogleSignIn />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text variant="bodyMedium">already have an account?</Text>
          <Button
            textColor={Colors.ctrColor2}
            onPress={() => router.push("/authScreens/loginScreen")}
          >
            LOG IN
          </Button>
        </View>
      </View>
    </View>
  );
}

export default SignUpScreen;
