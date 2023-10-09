import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { Button } from "react-native-paper";
import FAB from "../../components/FAB";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",

            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
              <Link href="/profile" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="user-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="addNew"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome
                size={35}
                name="plus-circle"
                color={Colors.ctrColor2}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="starredProject"
          options={{
            title: "Starred",
            tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
          }}
        />
      </Tabs>
      <FAB />
    </>
  );
}
