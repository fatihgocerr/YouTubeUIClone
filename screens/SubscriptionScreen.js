import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

import Header from "../components/Header";

export default function SubscriptionScreen() {
  return (
    <View style={{ backgroundColor: themeColors.bg }} className={"flex-1 pt-1"}>
      <Header />
      <View className={'flex-1 justify-center px-4'}>
        <View className='items-center mb-16' >
          <Image source={require('../assets/icons/subscription.png')} className='w-44 h-44 ' style={{tintColor:'#475569'}} />
        </View>
        <View className='items-center space-y-3'>
          <Text className='text-white font-bold text-lg'>
            Don't miss new videos
          </Text>
          <Text className='text-gray-400 text-sm break-words'>
            Sign in see updates from your favorite YouTube channels
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

