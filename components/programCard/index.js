import { RatingSm } from "../rating";
import { roundVote } from "../../utils/roundVote";
import { shortDateMask } from "../../utils/dateMask";
import { Text, View, Image, SafeAreaView, ScrollView } from "react-native";

export const ProgramCard = ({ program, handleProgram, media }) => {
  return (
    <View className="min-h-80 bg-opacity-50 mt-4 w-36 mx-2">
      <View className="relative">
        <Image
          onTouchEnd={() =>
            handleProgram(program.media_type || media, program.id)
          }
          source={{
            uri: `https://image.tmdb.org/t/p/w220_and_h330_face${program.poster_path}`,
          }}
          className="h-52 rounded-lg"
        />
        <RatingSm vote_average={roundVote(program.vote_average)} />
      </View>
      <Text
        onClick={() => handleProgram(program.media_type, program.id)}
        className="font-bold mt-6 text-sm cursor-pointer hover:text-blue-400"
      >
        {program.title || program.name}
      </Text>
      <Text className="text-sm text-gray-600">
        {shortDateMask(program.release_date || program.first_air_date)}
      </Text>
    </View>
  );
};
