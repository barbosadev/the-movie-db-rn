import { View, Text, Pressable, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";

export const SearchInput = ({ text, onChange, handleSearch, content }) => {
  return (
    <View className="w-ful">
      <TextInput
        onChangeText={onChange}
        // onKeyDown={(event) => {
        //   if (event.key === "Enter") {
        //     handleSearch();
        //   }
        // }}
        className="w-full h-12 rounded-full px-6 text-black font-bold bg-white"
        type="text"
        name="search"
        value={text}
        placeholder={content.inputPlaceholder}
      />
      <Pressable
        // onClick={handleSearch}
        // onPress={handleSearch(text)}
        onTouchEnd={() => handleSearch()}
        // onPressOut={handleSearch(text)}
        className="bg-slate-900 px-6 rounded-full h-12 absolute right-0 flex items-center justify-center"
      >
        <Text className="text-white font-bold">{content.buttonText}</Text>
      </Pressable>
    </View>
  );
};
