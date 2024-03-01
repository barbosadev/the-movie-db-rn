import { Image, Text, View, SafeAreaView, ScrollView } from "react-native";

export const ProgramCredits = ({ content, programCreditsData }) => {
  return (
    <View>
      {programCreditsData.length > 0 && (
        <View className="py-6 flex flex-col gap-2">
          <Text className="px-10 font-bold text-xl">
            {content.creditsTitle}
          </Text>

          <SafeAreaView>
            <ScrollView horizontal={true}>
              <View className="px-10 pt-2 flex gap-4 flex-row pb-8">
                {programCreditsData.map((programCredits, i) => {
                  if (i < 9) {
                    return (
                      <View
                        key={i}
                        className="rounded-lg border-gray-200 bg-white box-border min-w-36 w-36"
                        style={{
                          borderWidth: "1px",
                          boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                        }}
                      >
                        <Image
                          className="rounded-t-lg w-full h-40"
                          source={{
                            uri: `https://media.themoviedb.org/t/p/w138_and_h175_face${programCredits?.profile_path}`,
                          }}
                        />
                        <View className="px-2 py-2">
                          <Text className="font-bold text-sm">
                            {programCredits.name}
                          </Text>
                          <Text className="text-xs">
                            {programCredits.character}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                  return null;
                })}
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      )}
    </View>
  );
};
