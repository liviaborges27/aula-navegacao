import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    // Aplicando o estilo do container principal
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Tela principal</Text>

      {/* Aplicando o estilo de botão nos Links */}
      <Link href="/settings" style={styles.botao}>
        <Text style={styles.textoBotao}>Ir para Configurações</Text>
      </Link>

      <Link href="/ajuda" style={styles.botao}>
        <Text style={styles.textoBotao}>Ir para Ajuda</Text>
      </Link>
      
    </View>
  );
}

// folha de estilos organizada externa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f7", // fundo cinza claro 
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30, // Dá um espaço entre o título e os botões
  },
  botao: {
    backgroundColor: "#0a86b8", // Azul padrão iOS/Mobile
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 15, // Espaço entre um botão e outro
    width: "80%", // Deixa os botões com um tamanho padrão legal
    textAlign: "center", // Garante o texto centralizado no link
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});