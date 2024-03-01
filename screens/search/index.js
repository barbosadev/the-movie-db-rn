import { content } from "./content";
import { useSearch } from "./useSearch";
import { SearchInput } from "../../components/searchInput";
import { SearchPageCard } from "../../components/searchPageCard";
import { SafeAreaView, ScrollView, View } from "react-native";

export const SearchPage = ({ route, navigation }) => {
  const { resultList, handleProgram, searchText, setSearchText, handleSearch } =
    useSearch(route, navigation);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="py-2 px-2 shadow-lg">
          <SearchInput
            onChange={setSearchText}
            text={searchText}
            handleSearch={() => handleSearch(searchText)}
            content={content.searchContent}
          />
        </View>
        <View className="flex flex-col px-4 py-4">
          {resultList.map((program, i) => (
            <SearchPageCard
              key={i}
              program={program}
              handleProgram={handleProgram}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
