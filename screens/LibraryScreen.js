import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from "../constants";
import ShortVideoCard from "../components/shortVideoCard";
import VideoCard  from "../components/videoCard";
import Header from "../components/Header";

export default function LibraryScreen() {
  return (
    <View style={{ backgroundColor: themeColors.bg }} className={"flex-1 pt-1"}>
      <Header />
      <View className={'flex-1 justify-center px-4'}>
      <View className='items-center mb-16' >
        <Icon.Folder color='#374151' strokeWidth={2} height={180} width={180}   />
      </View>
      <View className='items-center space-y-3'>
        <Text className='text-white font-bold text-lg'>
          Enjoy your favorite videos
        </Text>
        <Text className='text-gray-400 text-sm'>
         Sign in to access videos, that you've liked or saved
        </Text>
        <TouchableOpacity className='bg-blue-500 py-1 px-3 rounded-xl'>
          <Text className=''>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

