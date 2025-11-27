import { StyleSheet, View, Text, SectionList } from "react-native";

const compromissosEquipe = [
  {
    usuario: "Eu",
    data: [
      { horario: "09h:30", assunto: 'Reunião "Daily"' },
      { horario: "14h:00", assunto: "Reunião com cliente Carros & Carros" },
      { horario: "16h:30", assunto: "Prazo final Projeto X" },
    ],
  },
  {
    usuario: "Jurema (chefe)",
    data: [
      { horario: "09h:30", assunto: 'Reunião "Daily"' },
      { horario: "12h:00", assunto: "Almoço com a diretoria" },
      { horario: "15h:00", assunto: "Saída viagem" },
    ],
  },
  {
    usuario: "Aderbal",
    data: [
      { horario: "09h:30", assunto: 'Reunião "Daily"' },
      { horario: "13h:30", assunto: "Visita técnica Uni-FACEF" },
      { horario: "16h:30", assunto: "Prazo final Projeto X" },
    ],
  },
];

export default function CompromissosEquipe() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>Luís Felipe Mozer Chiqueto</Text>
        <Text style={styles.texto}>6° Semestre Eng. Software</Text>
      </View>
      <View style={styles.cardContainer}>
        <SectionList
          sections={compromissosEquipe}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Text style={styles.card}>
              {item.horario}: {item.assunto}
            </Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.header}>{section.usuario}</Text>
          )}
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

  header: {
    marginHorizontal: "auto",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: "4px",
  },
});
