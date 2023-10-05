import { View, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import { Surface, TextInput, Text, List } from "react-native-paper";
import { Stack } from "expo-router";

function Sheet() {
  return (
    <>
      <Stack.Screen options={{ title: "sheetaName" }} />
      <ScrollView style={{ backgroundColor: Colors.light.background }}>
        {/* Brain Storm */}
        <View>
          <Text
            variant="titleMedium"
            style={{
              textAlign: "left",
              paddingHorizontal: 20,
              marginTop: 10,
              maxWidth: "50%",
              backgroundColor: "white",
              padding: 10,
            }}
          >
            Barin Storm
          </Text>
          <Surface
            elevation={0}
            style={{
              minWidth: "100%",
              minHeight: 200,
              backgroundColor: "white",
            }}
          >
            <List.Item
              style={{
                alignSelf: "center",
                padding: 0,
                borderWidth: 0.2,
                borderColor: "fefefe",
                maxWidth: "90%",
              }}
              title="h1"
            />
          </Surface>
        </View>

        {/* UI/UX */}

        <View>
          <Text
            variant="titleMedium"
            style={{
              textAlign: "left",
              paddingHorizontal: 20,
              marginTop: 10,
              maxWidth: "50%",
              backgroundColor: "white",
              padding: 10,
            }}
          >
            UI/UX
          </Text>
          <Surface
            elevation={0}
            style={{
              minWidth: "100%",
              minHeight: 200,
              backgroundColor: "white",
            }}
          >
            <Surface
              id="UILink"
              elevation={5}
              style={{
                backgroundColor: "f3f3fe",
                aspectRatio: 16 / 9,
                width: "70%",
                alignSelf: "center",
                marginVertical: 5,
              }}
            >
              <Text>UI</Text>
            </Surface>
          </Surface>
        </View>
      </ScrollView>
    </>
  );
}

export default Sheet;
