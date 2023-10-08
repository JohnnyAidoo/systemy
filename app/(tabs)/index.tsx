// import { Text } from "../../components/Themed";
import { View, FlatList, Dimensions } from "react-native";
import { Text, Surface, Button, Modal, TextInput } from "react-native-paper";
import HomeCard from "../../components/HomeCard";
import { useRouter, useFocusEffect } from "expo-router";
import { useState } from "react";
import PopUpModal from "../../components/popupModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home() {
  const WIDTH = Dimensions.get("window").width;
  const router = useRouter();

  const [isSignedIn, setIsSignedin] = useState<boolean>(false);
  const [modeVisible, setModeVisible] = useState<boolean>(false);

  useFocusEffect(() => {
    const checkIfSignedIn = async () => {
      let userId = await AsyncStorage.getItem("userId");
      !userId ? router.replace("/introScreen") : null;
    };

    checkIfSignedIn();
  });

  return (
    <>
      <Button
        icon="plus"
        mode="contained-tonal"
        style={{ width: "80%", alignSelf: "center", margin: 5 }}
        buttonColor="#fefefe"
        onPress={() => {
          setModeVisible(true);
        }}
      >
        New Project
      </Button>

      <FlatList
        style={{ height: "100%" }}
        renderItem={() => <HomeCard />}
        data={[1, 2, 3, 4]}
        numColumns={2}
        contentContainerStyle={{ width: WIDTH }}
        bounces
      />
      <PopUpModal
        modeVisible={modeVisible}
        onDismiss={() => {
          setModeVisible(false);
        }}
      />
    </>
  );
}

export default Home;
