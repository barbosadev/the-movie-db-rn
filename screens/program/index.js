import { content } from "./content";
import { getProgram } from "../../services/program";
import { useEffect, useState } from "react";
import { ProgramCredits } from "../../components/programCredits";
import { ProgramDetails } from "../../components/programDetails";
import { getProgramCredits } from "../../services/programCredits";
import { SafeAreaView, ScrollView, View } from "react-native";

export const Program = ({ route, navigation }) => {
  const [programData, setProgramData] = useState({});
  const [programCreditsData, setProgramCreditsData] = useState([]);

  useEffect(() => {
    const { media_type, id } = route.params;

    Promise.all([getProgram(media_type, id), getProgramCredits(media_type, id)])
      .then((values) => {
        setProgramData(values[0]);
        setProgramCreditsData(values[1].cast);
      })
      .catch((error) => {
        // setError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <ProgramDetails programData={programData} />
        <ProgramCredits
          content={content}
          programCreditsData={programCreditsData}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
