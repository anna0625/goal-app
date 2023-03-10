import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        androiod_ripple={{ color: "#95778d" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: "#ffb6b6",
  },
  goalText: {
    padding: 8,
    color: "#ffffff",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
