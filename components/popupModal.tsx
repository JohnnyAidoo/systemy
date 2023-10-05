import { Button, Modal, Text, TextInput } from "react-native-paper";
import Colors from "../constants/Colors";
import { router } from "expo-router";

function PopUpModal(props: { modeVisible: boolean; onDismiss: () => void }) {
  return (
    <Modal
      visible={props.modeVisible}
      onDismiss={() => {
        props.onDismiss();
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
      <TextInput
        placeholder="project name"
        mode="flat"
        activeUnderlineColor={Colors.ctrColor2}
        cursorColor="black"
        textColor={Colors.light.text}
      />
      <Button
        onPress={() => {
          router.push("/sheetTemp");
        }}
        mode="elevated"
        textColor={Colors.light.background}
        buttonColor={Colors.ctrColor2}
        style={{ width: "60%", alignSelf: "center", margin: 10 }}
      >
        Done
      </Button>
    </Modal>
  );
}

export default PopUpModal;
