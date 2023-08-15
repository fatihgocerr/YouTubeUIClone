const { SafeAreaView, View, Image, Text } = require("react-native");
const Icon = require("react-native-feather");
const React = require("react");

const Header = () => {
  return (
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
  );
};

export default Header;
