import { View, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import { Surface, TextInput, Text, List, Button } from "react-native-paper";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../components/url";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Sheet() {
  interface todos {
    todoItem: string;
    id: string;
  }
  const [text, setText] = useState<string>();
  const [todos, setTodos] = useState<todos[]>();

  useEffect(() => {
    const getTodos = async () => {
      const id = await AsyncStorage.getItem("userId");
      axios.get(`${URL}/todos/${id}`).then((response) => {
        setTodos(response.data);
        console.log(response.data);
      });
    };

    getTodos();
  }, [text, todos]);

  const addTodo = async () => {
    const id = await AsyncStorage.getItem("userId");
    axios
      .post(`${URL}/todos/add`, {
        author: id,
        todoItem: text,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Stack.Screen options={{ title: "sheetaName" }} />
      <ScrollView
        style={{
          backgroundColor: Colors.light.background,
          paddingHorizontal: 15,
        }}
      >
        {/* 
        
        

    

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
        */}

        <TextInput onChangeText={(e) => setText(e)} />
        <Button onPress={addTodo}>Add</Button>
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
              minHeight: 20,
              backgroundColor: "white",
            }}
          >
            {todos?.map((item) => (
              <List.Item
                style={{
                  alignSelf: "center",
                  padding: 0,
                  borderWidth: 0.2,
                  borderColor: "fefefe",
                  maxWidth: "90%",
                }}
                title={item.todoItem}
              />
            ))}
          </Surface>
        </View>
      </ScrollView>
    </>
  );
}

export default Sheet;
