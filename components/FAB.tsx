import { Button, IconButton, Modal, Text, TextInput } from "react-native-paper";
import Colors from "../constants/Colors";
import { useState } from "react";
import PopUpModal from "./popupModal";

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
      <PopUpModal
        modeVisible={modeVisible}
        onDismiss={() => {
          setModeVisible(false);
        }}
      />
    </>
  );
}

export default FAB;
