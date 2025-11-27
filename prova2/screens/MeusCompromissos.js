import { StyleSheet, View, Text, FlatList } from "react-native";

const compromissos = [
  { horario: "09h30", assunto: 'Reunião "Daily"' },
  { horario: "14h00", assunto: "Reunião com cliente Carros & Carros" },
  { horario: "16h30", assunto: "Prazo final Projeto X" },
];
export default function MeusCompromissos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>(Eu)</Text>
      <View>
        <Text style={styles.texto}>Luís Felipe Mozer Chiqueto</Text>
        <Text style={styles.texto}>6° Semestre Eng. Software</Text>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={compromissos}
          keyExtractor={(item) => item.horario}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.texto}>
                {item.horario}: {item.assunto}
              </Text>
            </View>
          )}
          initialNumToRender={12}
          windowSize={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  },
  imagem: { width: 200, height: 200, resizeMode: "contain" },
  texto: { fontSize: 14, fontWeight: 500 },
  title: { fontSize: 22, fontWeight: 700 },

  buttonList: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "center",
    justifyContent: "center",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
    paddingLeft: "8px",
    paddingVertical: "4px",
    marginBottom: 8,
  },
});
