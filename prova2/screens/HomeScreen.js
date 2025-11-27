import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>
      <View>
        <Text style={styles.texto}>Luís Felipe Mozer Chiqueto</Text>
        <Text style={styles.texto}>6° Semestre Eng. Software</Text>
      </View>
      <View style={styles.buttonList}>
        <Button
          title="Meus compromissos"
          onPress={() => navigation.navigate("Meus Compromissos")}
        />
        <Button
          title="Compromissos da equipe"
          onPress={() => navigation.navigate("Compromissos da Equipe")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  imagem: { width: 200, height: 200, resizeMode: "contain" },
  texto: { fontSize: 14, fontWeight: 500 },
  title: { fontSize: 18, fontWeight: 700 },

  buttonList: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "center",
    justifyContent: "center",
  },
});
