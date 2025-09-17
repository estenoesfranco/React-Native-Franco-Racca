import { View, Text, StyleSheet } from "react-native";

export default function Hola() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, color: "blue", fontWeight: "bold" },
});
