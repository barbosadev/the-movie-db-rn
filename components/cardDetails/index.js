import { Text, View } from "react-native";
import { longDateMask } from "../../utils/dateMask";

export const CardDetails = ({
  program: {
    title,
    name,
    release_date,
    first_air_date,
    overview,
    media_type,
    id,
  },
  handleProgram,
}) => {
  return (
    <View className="flex flex-col justify-center gap-4 flex-1 px-2">
      <View>
        <Text
          onTouchEnd={() => handleProgram(media_type, id)}
          className="font-bold text-lg cursor-pointer hover:text-gray-500"
        >
          {title || name}
        </Text>
        <Text className="text-gray-500 text-sm">
          {longDateMask(release_date || first_air_date)}
        </Text>
      </View>

      <Text className="text-sm ">
        {overview.length > 150 ? `${overview.substring(0, 150)}...` : overview}
      </Text>
    </View>
  );
};
