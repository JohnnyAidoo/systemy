import { Image, Pressable } from "react-native";
import { Surface, Text } from "react-native-paper";
import * as WebBrowswer from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { webID, AndroidID, IOSID } from "../constants/ids";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

function GoogleSignIn() {
  const [accessToken, setAccessToken] = useState<string>();
  const [user, setUser] = useState<AxiosResponse>();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: webID,
    androidClientId: AndroidID,
    iosClientId: IOSID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication?.accessToken);
      accessToken && getUser();
    }
  }, [response, accessToken]);

  const getUser = async () => {
    let resonse = await axios.get("https://googleapi.com/userinfo//v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const userinfo = await resonse;
    setUser(userinfo);
  };

  return (
    <Pressable
      onPress={() => {
        promptAsync();
      }}
    >
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
