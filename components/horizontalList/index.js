import { View, SafeAreaView, ScrollView } from "react-native";
import { ProgramCard } from "../programCard/index";

export const HorizontalList = ({ dataList, handleProgram, media }) => {
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        {dataList.map((item, i) => (
          <ProgramCard
            key={i}
            program={item}
            handleProgram={handleProgram}
            media={media}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
