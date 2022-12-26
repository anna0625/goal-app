import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        value={enteredGoalText}
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" color="#95778d" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
  },
});
