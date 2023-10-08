// import { Text } from "../../components/Themed";
import { View, FlatList, Dimensions } from "react-native";
import { Text, Surface, Button, Modal, TextInput } from "react-native-paper";
import HomeCard from "../../components/HomeCard";
import { useRouter, useFocusEffect } from "expo-router";
import Colors from "../../constants/Colors";
import { useState } from "react";
import FAB from "../../components/FAB";
import PopUpModal from "../../components/popupModal";

function Home() {
  const WIDTH = Dimensions.get("window").width;
  const router = useRouter();
  const isFirstTime: boolean = true;

  const [modeVisible, setModeVisible] = useState<boolean>(false);

  useFocusEffect(() => {
    const checkIfFirstTime = (checker: boolean) => {
      checker ? router.replace("/introScreen") : null;
    };

    checkIfFirstTime(isFirstTime);
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
