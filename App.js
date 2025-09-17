import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Hola from "./components/Hola";
import Tarjeta from "./components/Tarjeta";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* aCtividad uno */}
      <Text style={styles.titulo}>Hola te saludo</Text>
      <Hola />
      <StatusBar style="auto" />
      {/* actividad dos */}
      <Text style={styles.titulo}>Tarjeta de presentación</Text>
      <Tarjeta />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
});
