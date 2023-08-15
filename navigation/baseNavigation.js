import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Image } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import LibraryScreen from "../screens/LibraryScreen";
import SubscriptionScreen from "../screens/SubscriptionScreen";
import ShortScreen from "../screens/ShortScreen";

const Tab = createBottomTabNavigator();


const FeatherIcons = ({ name, color, height, stroke }) => {
  const IconComp = Icon[name];
  return <IconComp color={color} strokeWidth={stroke} height={height} />;
};
const BaseIcon = ({ name }) => {
  const icons = {
    shorts: require("../assets/icons/shorts.png"),
    subscription: require("../assets/icons/subscription.png"),
    library: require("../assets/icons/library.png"),
  };
  const iconSource = icons[name];
  return (
    <Image source={iconSource} style={{ width: 22, height: 22, tintColor: "white" }} />
  );
};

export default function BaseNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"

                     screenOptions={{
                       tabBarStyle: {
                         backgroundColor: themeColors.bg,
                         borderTopWidth: 0.5,
                         borderTopColor: "#a1a1aa",
                         paddingBottom: 3,
                       },
                     }}
      >
        <Tab.Screen name="Home" component={HomeScreen}

                    options={{

                      headerShown: false,
                      tabBarShowIcon: true,
                      tabBarIcon: ({ color, size }) => {
                        return (
                          <FeatherIcons color={"white"} height={22} stroke={1.2} name={"Home"} />
                        );
                      },
                      tabBarLabel: "Home",
                      tabBarLabelStyle: { color: "white", fontSize: 12 },
                    }}

        />
        <Tab.Screen name="Shorts" component={ShortScreen}
                    options={{
                      headerShown: false,
                      tabBarShowIcon: true,
                      tabBarIcon: ({ color, size }) => {
                        return (
                          <BaseIcon name={"shorts"} />
                        );
                      },
                      tabBarLabel: "Shorts",
                      tabBarLabelStyle: { color: "white", fontSize: 12 },
                    }} />

        <Tab.Screen name="Subscriptions" component={SubscriptionScreen}
                    options={{
                      headerShown: false,
                      tabBarShowIcon: true,
                      tabBarIcon: ({ color, size }) => {
                        return (
                          <BaseIcon name={"subscription"} />
                        );
                      },
                      tabBarLabel: "Subscriptions",
                      tabBarLabelStyle: { color: "white", fontSize: 12 },
                    }} />

        <Tab.Screen name="Library" component={LibraryScreen}
                    options={{
                      headerShown: false,
                      tabBarShowIcon: true,
                      tabBarIcon: ({ color, size }) => {
                        return (
                          <BaseIcon name={"library"} />
                        );
                      },
                      tabBarLabel: "Library",
                      tabBarLabelStyle: { color: "white", fontSize: 12 },
                    }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
