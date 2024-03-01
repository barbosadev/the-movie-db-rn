import { useHome } from "./useHome";
import { content } from "./content";
import { Trending } from "../../components/trending";
import { MostPopular } from "../../components/popular";
import { BannerHome } from "../../components/bannerHome";
import { SearchInput } from "../../components/searchInput";
import { View, SafeAreaView, ScrollView } from "react-native";

export const Home = ({ navigation }) => {
  const {
    trendingList,
    popularList,
    searchText,
    trendingOptionSelected,
    popularOptionSelected,
    setSearchText,
    handleTrendingSwitch,
    handlePopularSwitch,
    handleProgram,
    handleSearch,
  } = useHome(navigation);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <BannerHome content={content}>
            <SearchInput
              text={searchText}
              onChange={setSearchText}
              handleSearch={() => handleSearch(searchText)}
              content={content.searchContent}
            />
          </BannerHome>
          <Trending
            trendingList={trendingList}
            handleProgram={handleProgram}
            content={content.trendingContent}
            period={trendingOptionSelected}
            handleSwitch={handleTrendingSwitch}
          />
          <MostPopular
            popularList={popularList}
            handleProgram={handleProgram}
            content={content.popularContent}
            media={popularOptionSelected}
            handleSwitch={handlePopularSwitch}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
