import { Image, Pressable } from "react-native";

export const ProgramPhoto = ({ program, handleProgram }) => {
  return (
    <Pressable onPress={() => handleProgram(program.media_type, program.id)}>
      <Image
        className="rounded-l-lg cursor-pointer h-40 w-28"
        source={{
          uri: `https://media.themoviedb.org/t/p/w94_and_h141_bestv2${program?.poster_path}`,
        }}
      />
    </Pressable>
  );
};
