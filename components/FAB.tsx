import { Button, IconButton, Modal, Text, TextInput } from "react-native-paper";
import Colors from "../constants/Colors";
import { useState } from "react";

function FAB() {
  const [modeVisible, setModeVisible] = useState<boolean>(false);

  return (
    <>
      <IconButton
        onPress={() => {
          setModeVisible(true);
        }}
        size={40}
        style={{ position: "absolute", alignSelf: "center", bottom: 0 }}
        icon="plus"
        containerColor={Colors.ctrColor2}
        iconColor="white"
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

export default FAB;
