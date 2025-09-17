import { View, Text, StyleSheet } from "react-native";

export default function Tarjeta() {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Franco Daniel Racca</Text>
      <Text style={styles.course}>Curso: 6to año</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20, margin: 20, backgroundColor: "#eee", borderRadius: 10 },
  name: { fontWeight: "bold", fontSize: 20, marginBottom: 5 },
  course: { color: "darkgreen" },
});
