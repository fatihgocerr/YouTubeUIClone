import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { formatNumber } from "../utils";

const { width, height } = Dimensions.get("window");
const Icons = ({ name, color, height, stroke }) => {
  const IconComp = Icon[name];
  return <IconComp color={color} strokeWidth={stroke} height={height} />;
};

const RightElement = () => {
  const data = [
    {
      title: "like",
      name: "ThumbsUp",
      content: 7800,
    },
    {
      title: "dislike",
      name: "ThumbsDown",
      content: "Dislike",
    },
    {
      title: "comment",
      name: "MessageSquare",
      content: 430,
    },
    {
      title: "share",
      name: "Share",
      content: "Share",
    },
    {
      title: "remix",
      name: "RefreshCcw",
      content: "Remix",
    },
  ];
  return (
    <>
      {
        data.map((item, i) => {
          return (
            <TouchableOpacity className=" w-14 h-14 items-center space-y-1" key={i}>
              <Icons color={"white"} height={22} stroke={3} name={item.name} />
              <Text className="text-white text-xs">{ typeof item.content === 'string' ? item.content : formatNumber(item.content) }</Text>
            </TouchableOpacity>
          );
        })
      }

    </>
  );
};
export default function Shorts({ item }) {
  return (
    <View style={{ width: width, height: height - 75 }} className="relative   flex justify-between  ">
      <Image source={item.image} className="h-full w-full absolute " resizeMode={"cover"} />
      <View className="flex-row justify-end pt-3 pr-1 ">
        <TouchableOpacity>
          <Icon.Search stroke={"white"} strokeWidth={1.8} height="20" className="mr-4" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon.MoreVertical stroke={"white"} strokeWidth={1.8} height="20" />
        </TouchableOpacity>
      </View>
      <View className="relative flex-row p-2 justify-between ">

        <View className="gap-1 flex-1">
          <View className="flex-row gap-2 items-center">
            <Image source={require("../assets/images/avatar.png")} className="w-9 h-9 rounded-full" />
            <Text className="text-white">@username</Text>
            <TouchableOpacity className="bg-red-500 px-2 py-0.5 rounded-md">
              <Text className="text-white">
                Subscribe
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-white shadow-lg font-bold text-sm">{item.title}</Text>
          <View className="flex-row gap-1">
            <Icon.Music color="white" height={18} strokeWidth={1.2} />
            <Text className="text-white">Original Sound</Text>
          </View>
        </View>

        <View className=" absolute right-0 bottom-0 gap-2 items-center ">
          <RightElement />

          <TouchableOpacity>
            <Image source={require("../assets/images/avatar.png")} className="w-9 h-9 rounded-xl" />
            <Image source={require("../assets/icons/sound.png")}
                   className="absolute w-3 h-3 right-0 bottom-0 bg-black rounded-full "
                   style={{ tintColor: "white" }} />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

