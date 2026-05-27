import { Text, View } from "react-native";
import { Link } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function Bluethooth() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Configurações do bluetooth</Text>


      <Ionicons
              name={"bluetooth"}
              size={400}
              color="blue"
            />
    </View>
  );
}