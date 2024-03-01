import { Text, View } from "react-native";
import { DataSwitch } from "../dataSwitch";
import { HorizontalList } from "../horizontalList";

export const MostPopular = ({
  popularList,
  handleProgram,
  content,
  media,
  handleSwitch,
}) => {
  return (
    <View className="mb-10">
      <View className="py-2 px-4 flex">
        <Text className="text-2xl font-bold">{content.title}</Text>
        <DataSwitch
          options={content.switch_options}
          selectedOption={media}
          handleSwitch={handleSwitch}
        />
      </View>
      <View>
        <HorizontalList
          dataList={
            popularList[
              content.switch_options.findIndex(
                (option) => option.option === media
              )
            ]
          }
          media={media}
          handleProgram={handleProgram}
        />
      </View>
    </View>
  );
};
