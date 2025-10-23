import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import ListaAtividadePratica from "./ListaAtividadePratica";
const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={[styles.container, styles.banner]}>
      <ListaAtividadePratica />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: width * 0.9,
    height: height * 0.25,
    borderRadius: 10,
  },
});
