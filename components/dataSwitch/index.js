import { Pressable, View, Text } from "react-native";

export const DataSwitch = ({ options, selectedOption, handleSwitch }) => {
  return (
    <View
      className="flex items-center h-8 font-bold rounded-full border-black text-sm w-full flex-row mt-2"
      style={{ borderWidth: "1px" }}
    >
      {options.map((el, i) => (
        <View
          key={i}
          className="flex-1 w-full items-center h-full justify-center"
        >
          <Pressable
            onPress={() => handleSwitch(el.option)}
            className={`${
              selectedOption === el.option &&
              " bg-slate-900 h-full justify-center w-full items-center flex text-white rounded-full"
            }`}
          >
            <Text
              className={`${
                selectedOption === el.option
                  ? "text-green-300 font-bold"
                  : "font-bold"
              }`}
            >
              {el.text}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};
