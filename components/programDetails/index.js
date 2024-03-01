import { Rating } from "../rating";
import { minutesToHours } from "../../utils/time";
import { roundVote } from "../../utils/roundVote";
import { fullYearDateMask, numericDateMask } from "../../utils/dateMask";
import { Image, Text, View } from "react-native";

export const ProgramDetails = ({ programData }) => {
  return (
    <View>
      <Image
        className="h-32 w-full"
        source={{
          uri: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${programData?.backdrop_path}`,
        }}
      />
      <View className="px-10 mt-4">
        <Image
          className="rounded-xl w-auto h-96"
          source={{
            uri: `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${programData?.poster_path}`,
          }}
        />
      </View>
      <View className="h-96 w-full px-10 mt-4">
        <View className="mt-4">
          <View className="flex flex-col gap-4">
            <View>
              <Text className="text-4xl font-bold">
                {programData.title || programData.name}
                <Text className="font-light">
                  {`(${fullYearDateMask(
                    programData.release_date || programData.first_air_date
                  )})`}
                </Text>
              </Text>
              <Text>
                {numericDateMask(
                  programData.release_date || programData.first_air_date
                )}
                {" - "}
                {programData?.genres
                  ?.map((genre) => genre.name)
                  .join(", ")}{" "}
                {" - "}
                {programData.runtime && minutesToHours(programData.runtime)}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Rating vote_average={roundVote(programData.vote_average)} />
              <Text className="font-bold text-sm">Avaliação dos usuários</Text>
            </View>
            <Text className="italic font-light">{programData.tagline}</Text>
            {programData.overview !== "" && (
              <View>
                <Text className="text-xl font-bold">Sinopse</Text>
                <Text className="text-base">{programData.overview}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
