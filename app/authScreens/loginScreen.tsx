import { View } from "react-native";
import { Button, Divider, Text, TextInput, Dialog } from "react-native-paper";
import Colors from "../../constants/Colors";
import { useState } from "react";
import { router } from "expo-router";
import GoogleSignIn from "../../components/googleSignInButton";
import axios from "axios";
import URL from "../../components/url";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
  const [showPassword, setShowPasword] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState({
    state: false,
    message: "",
    btnLoading: false,
  });
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  const handleSignIn = () => {
    setShowDialog({
      state: false,
      message: "",
      btnLoading: false,
    });

    axios
      .post(`${URL}/users/signin`, {
        email: email,
        password: password,
      })
      .then(async (res) => {
        //@ts-ignore
        res ? await AsyncStorage.setItem("userId", res.data.userId) : null;

        router.push("/(tabs)");
        setShowDialog({
          state: false,
          message: res.data.message,
          btnLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        setShowDialog({
          state: !showDialog.state,
          message: (err.message = "Request failed with status 401"
            ? "User email and password incorrect"
            : err.message),
          btnLoading: false,
        });
      });
  };

  return (
    <>
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ height: "60%", justifyContent: "space-between" }}>
          {/* email input */}
          <TextInput
            textContentType="emailAddress"
            onChangeText={(text) => {
              setEmail(text);
            }}
            mode="outlined"
            placeholder="email"
            activeOutlineColor={Colors.ctrColor2}
            cursorColor="black"
            placeholderTextColor={"grey"}
            left={<TextInput.Icon icon="email" color={Colors.light.text} />}
          />

          {/* password input  */}
          <TextInput
            textContentType="password"
            onChangeText={(text) => {
              setPassword(text);
            }}
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
            loading={showDialog.btnLoading}
            onPress={handleSignIn}
            mode="elevated"
            buttonColor={Colors.ctrColor1}
            textColor={Colors.light.background}
            style={{ width: "80%", alignSelf: "center" }}
          >
            Sign In
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

          {/* google Sign in */}
          <GoogleSignIn />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text variant="bodyMedium">don't have an account?</Text>
            <Button
              textColor={Colors.ctrColor2}
              onPress={() => {
                router.push("/authScreens/signUpScreen");
              }}
            >
              SIGN UP
            </Button>
          </View>
        </View>
      </View>

      <Dialog visible={showDialog.state}>
        <Dialog.Content>
          <Text>{showDialog.message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              setShowDialog({
                state: !showDialog.state,
                message: "",
                btnLoading: false,
              });
            }}
          >
            OK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
}

export default LoginScreen;
