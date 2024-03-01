import { Text, View } from "react-native";
import { DataSwitch } from "../dataSwitch";
import { HorizontalList } from "../horizontalList";

export const Trending = ({
  trendingList,
  handleProgram,
  content,
  period,
  handleSwitch,
}) => {
  return (
    <View>
      <View className="py-2 px-4 flex">
        <Text className="text-2xl font-bold">{content.title}</Text>
        <DataSwitch
          options={content.switch_options}
          selectedOption={period}
          handleSwitch={handleSwitch}
        />
      </View>
      <View
        // style={{
        //   backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')`,
        //   backgroundPosition: "50% 80px",
        // }}
        className="bg-no-repeat bg-cover"
      >
        <HorizontalList
          dataList={
            trendingList[
              content.switch_options.findIndex(
                (option) => option.option === period
              )
            ]
          }
          handleProgram={handleProgram}
        />
      </View>
    </View>
  );
};
