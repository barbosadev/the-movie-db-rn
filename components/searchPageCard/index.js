import { ProgramWithoutPhoto } from "../../components/programWithoutPhoto";
import { ProgramPhoto } from "../../components/programPhoto";
import { CardDetails } from "../../components/cardDetails";
import { View } from "react-native";

export const SearchPageCard = ({ program, handleProgram }) => {
  return (
    <View
      className="rounded-lg border-gray-200 bg-white flex flex-row mb-4 h-40 overflow-hidden"
      style={{
        borderWidth: "1px",
        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
      }}
    >
      {program.poster_path !== null ? (
        <ProgramPhoto handleProgram={handleProgram} program={program} />
      ) : (
        <ProgramWithoutPhoto handleProgram={handleProgram} program={program} />
      )}

      <CardDetails program={program} handleProgram={handleProgram} />
    </View>
  );
};
