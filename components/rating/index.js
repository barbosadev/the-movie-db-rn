import { Text, View } from "react-native";

export const Rating = ({ vote_average }) => {
  return (
    <View>
      <View className="bg-slate-900 p-2 rounded-full min-h-16 h-16 min-w-16 w-16 flex items-center justify-center relative">
        <View className="flex items-start flex-row">
          <Text className="text-xl font-bold text-white">{vote_average}</Text>
          <Text className="text-xs text-white">%</Text>
        </View>
      </View>
    </View>
  );
};

export const RatingSm = ({ vote_average }) => {
  return (
    <View>
      <View className="absolute -bottom-4 left-2 text-white bg-slate-900 p-2 rounded-full h-11 w-11 flex items-center justify-center">
        <View className="flex items-start flex-row">
          <Text className="text-sm font-bold text-white">{vote_average}</Text>
          <Text className="text-xs text-white">%</Text>
        </View>
      </View>
    </View>
  );
};
