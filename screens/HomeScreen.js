import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from "../constants";
import ShortVideoCard from "../components/shortVideoCard";
import VideoCard  from "../components/videoCard";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <View style={{ backgroundColor: themeColors.bg }} className={"flex-1 pt-1"}>
      <SafeAreaView className="flex-row justify-between mx-4">
        <View className=" flex-row items-center space-x-1 mt-1">
          <Image source={require("../assets/icons/youtubeIcon.png")} className="h-7 w-10" />
          <Text className={"text-white font-semibold text-xl tracking-tighter "}>YouTube</Text>
        </View>
        <View className="flex-row items-center space-x-3">
          <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
          <Image source={require("../assets/images/avatar.png")} className="h-7 w-7 rounded-full" />
        </View>
      </SafeAreaView>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={true}>

        {/*Categories*/}
        <View className="py-2 pb-5">
          <ScrollView className="px-4" horizontal showsHorizontalScrollIndicator={false}>
            {
              categories.map((category, index) => {
                let isActive = category === activeCategory;
                let textClass = isActive ? "text-black" : "text-white";
                return (
                  <TouchableOpacity key={index}
                                    style={{ backgroundColor: isActive ? "white" : "rgba(255,255,255,0.1)" }}
                                    onPress={() => setActiveCategory(category)}
                                    className="rounded-md p-1 px-3 mr-2">
                    <Text className={textClass}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })
            }
          </ScrollView>
        </View>

        {/*Suggested Vİdeo*/}
        <VideoCard item={videos[4]} />

        {/*Shorts*/}
        <View className="mt-2 py-5 space-y-3 border-t-zinc-700 border-b-zinc-700 border-4 border-l-0 border-r-0">
          <View className="mx-4 flex-row items-center space-x-2">
            <Image source={require("../assets/icons/shortsIcon.png")} className="w-5 h-6" />
            <Text className="text-white font-semibold text-lg tracking-lighter">Shorts</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
            {
              shortVideos.map((item, index) => {
                return (
                  <ShortVideoCard item={item} key={index} />
                );
              })
            }
          </ScrollView>

        </View>

        {/*Video*/}
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            videos.map((item,index) => <VideoCard item={item} key={index} />)
          }
        </ScrollView>

      </ScrollView>
    </View>
  );
}

