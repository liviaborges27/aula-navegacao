import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Settings() {
  return (
    // Aplicando o estilo do container principal
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Tela de configurações</Text>

      {/* Botão para voltar para a Home */}
      <Link href="/" style={styles.botao}>
        <Text style={styles.textoBotao}>Ir para o Início</Text>
      </Link>

      {/* Botão para ir para a Ajuda */}
      <Link href="/ajuda" style={styles.botao}>
        <Text style={styles.textoBotao}>Ir para Ajuda</Text>
      </Link>
      
    </View>
  );
}

// Folha de estilos da tela de Configurações
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f7",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#0a86b8", // Cinza escuro/Grafite (estilo ferramentas/configurações)
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 15,
    width: "80%",
    textAlign: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});