import { SectionList, StyleSheet, Text } from "react-native";

const dados = [
  {
    title: "Comida",
    data: [
      { nome: "Macarrão", preco: 12.5 },
      { nome: "Arroz", preco: 8.0 },
      { nome: "Feijão", preco: 7.5 },
    ],
  },
  {
    title: "Roupa",
    data: [
      { nome: "Camiseta", preco: 25.0 },
      { nome: "Calça", preco: 50.0 },
      { nome: "Tênis", preco: 120.0 },
    ],
  },
  {
    title: "Eletrônicos",
    data: [
      { nome: "Notebook", preco: 2500.0 },
      { nome: "Smartphone", preco: 1800.0 },
      { nome: "Fone de Ouvido", preco: 300.0 },
    ],
  },
  {
    title: "Eletrodomésticos",
    data: [
      { nome: "Cafeteira", preco: 350.0 },
      { nome: "Geladeira", preco: 2200.0 },
      { nome: "Micro-ondas", preco: 600.0 },
    ],
  },
];

const ListaAtividadePratica = () => {
  return (
    <SectionList
      sections={dados}
      keyExtractor={(item, index) => item.nome + index}
      renderItem={({ item }) => (
        <Text style={styles.item}>
          {item.nome} - R$ {item.preco.toFixed(2)}
        </Text>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    backgroundColor: "#eee",
    padding: 8,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
  },
});

export default ListaAtividadePratica;
