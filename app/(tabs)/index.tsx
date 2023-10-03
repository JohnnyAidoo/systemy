// import { Text } from "../../components/Themed";
import { View, FlatList, Dimensions } from "react-native";
import { Text, Surface, Button, Modal, TextInput } from "react-native-paper";
import HomeCard from "../../components/HomeCard";
import { useRouter, useFocusEffect } from "expo-router";
import Colors from "../../constants/Colors";
import { useState } from "react";

function Home() {
  const WIDTH = Dimensions.get("window").width;
  const router = useRouter();
  const isFirstTime: boolean = false;

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

      <Modal
        visible={modeVisible}
        onDismiss={() => {
          setModeVisible(false);
        }}
        contentContainerStyle={{
          backgroundColor: "white",
          padding: 20,
          aspectRatio: 16 / 9,
          width: "80%",
          alignSelf: "center",
          borderRadius: 20,
        }}
      >
        <Text variant="titleSmall" style={{ marginVertical: 10 }}>
          how would you name this project ?
        </Text>
        <TextInput placeholder="project name" mode="flat" />
        <Button
          mode="elevated"
          textColor="black"
          buttonColor={Colors.ctrColor2}
          style={{ width: "60%", alignSelf: "center", margin: 10 }}
        >
          Done
        </Button>
      </Modal>
    </>
  );
}

export default Home;
