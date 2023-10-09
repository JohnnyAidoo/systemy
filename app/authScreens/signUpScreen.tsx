import { View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Divider,
  Modal,
  Surface,
  Text,
  TextInput,
} from "react-native-paper";
import Colors from "../../constants/Colors";
import { useState } from "react";
import { router } from "expo-router";
import GoogleSignIn from "../../components/googleSignInButton";
import axios from "axios";
import URL from "../../components/url";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignUpScreen() {
  const [showPassword, setShowPasword] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    axios
      .post(`${URL}/users/signup`, {
        userName: credentials.userName,
        email: credentials.email,
        password: credentials.password,
      })
      .then(async (res) => {
        console.log(res.data._id);
        setShowModal(true);
        let userId = await res.data._id;
        await AsyncStorage.setItem("userId", userId);
        router.push("/welcomeScreen");
      })
      .catch((err) => {
        console.log(err.message);
      });
    //nav to welcome screen
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
          {/* username input */}
          <TextInput
            onChangeText={(text) => {
              setCredentials({
                userName: text,
                email: credentials.email,
                password: credentials.password,
              });
            }}
            textContentType="username"
            mode="outlined"
            placeholder="username"
            placeholderTextColor={"grey"}
            activeOutlineColor={Colors.ctrColor2}
            cursorColor="black"
            left={<TextInput.Icon icon="account" color={Colors.light.text} />}
          />
          {/* email input */}
          <TextInput
            onChangeText={(text) => {
              setCredentials({
                email: text,
                password: credentials.password,
                userName: credentials.userName,
              });
            }}
            textContentType="emailAddress"
            mode="outlined"
            placeholder="email"
            placeholderTextColor={"grey"}
            activeOutlineColor={Colors.ctrColor2}
            cursorColor="black"
            left={<TextInput.Icon icon="email" color={Colors.light.text} />}
          />

          {/* password input  */}
          <TextInput
            onChangeText={(text) => {
              setCredentials({
                password: text,
                email: credentials.email,
                userName: credentials.userName,
              });
            }}
            textContentType="password"
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
            onPress={handleSignIn}
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

      <Modal visible={showModal}>
        <Surface
          style={{
            width: "60%",
            alignSelf: "center",
            minHeight: "20%",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text variant="labelMedium">Login you in ...</Text>
          <ActivityIndicator size="large" color={Colors.ctrColor1} />
        </Surface>
      </Modal>
    </>
  );
}

export default SignUpScreen;
