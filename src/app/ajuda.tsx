import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Ajuda() {
  return (
    // Aplicando o estilo do container principal
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Tela de ajuda</Text>

      {/* Botão para Configurações */}
      <Link href="/settings" style={styles.botao}>
        <Text style={styles.textoBotao}>Ir para Configurações</Text>
      </Link>

      {/* Botão para voltar para a Home (/) */}
      <Link href="/" style={styles.botaoVoltar}>
        <Text style={styles.textoBotaoVoltar}>Voltar para o Início</Text>
      </Link>
      
    </View>
  );
}

// Folha de estilos da tela de Ajuda
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
    backgroundColor: "#0a86b8", // Verde para destacar uma ação positiva de ajuda
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 15,
    width: "80%",
    textAlign: "center",
  },
  botaoVoltar: {
    backgroundColor: "#0a86b8", // Cinza para o botão de voltar (ação secundária)
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "80%",
    textAlign: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  textoBotaoVoltar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});