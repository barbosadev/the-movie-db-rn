import { Image, View } from "react-native";

export const ProgramWithoutPhoto = ({ program, handleProgram }) => {
  return (
    <View className="relative">
      <View
        style={{
          backgroundColor: "#dbdbdb",
        }}
        className="min-h-40 h-40 min-w-28 w-28 flex items-center justify-center rounded-l-lg"
      ></View>
    </View>
  );
};
