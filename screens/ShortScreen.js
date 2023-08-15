import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from "../constants";

import Shorts from "../components/shorts";

export default function ShortScreen() {
  return (
    <View style={{ backgroundColor: themeColors.bg }} className={"flex-1 "}>

      <ScrollView className="flex-1 w-full h-full  "  showsVerticalScrollIndicator={true} pagingEnabled={true}>
        {/*Shorts*/}
        <View className="w-full h-full flex bg-red-400">
          <ScrollView   className="" >
            {
              shortVideos.map((item, index) => {
                return (
                  <Shorts item={item} key={index} />
                );
              })
            }
          </ScrollView>

        </View>

      </ScrollView>
    </View>
  );
}

