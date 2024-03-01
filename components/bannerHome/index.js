import { Text, View, Image } from "react-native";

export const BannerHome = ({ children, content }) => {
  return (
    <View>
      <View>
        <Image
          className="h-80"
          source={{
            uri: "https://deliriumnerd.com/wp-content/uploads/2022/09/Ruptura-serie.jpg",
          }}
        />
        <View
          className="absolute top-0 h-80 w-full brightness-200 bg-sky-900 bg-opacity-50"
          style={{ backgroundColor: "rgba(12, 74, 110, 0.6)" }}
        ></View>
      </View>
      <View className="px-6 py-12 absolute top-0 h-80 w-full">
        <View>
          <Text className="text-5xl font-bold text-white">
            {content.welcome}
          </Text>
          <Text className="text-3xl font-bold text-white">
            {content.description}
          </Text>
        </View>
        <View className="mt-6">{children}</View>
      </View>
    </View>
  );
};
