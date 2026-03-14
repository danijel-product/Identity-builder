import { Text, TouchableOpacity, StyleSheet } from "react-native";
import design from "../design.json";

export default function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: design.size.buttonWidth,
    backgroundColor: design.colors.primary,
    borderRadius: design.radius.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  text: {
    fontSize: 24,
    fontWeight: design.typography.button.fontWeight,
    color: design.colors.black,
  },
});