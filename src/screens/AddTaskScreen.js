import React, { useState, useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import * as taskActions from "../actions";

const AddTaskScreen = ({ navigation }) => {
  const [name, setName] = useState(null);

  let task = {
    name,
    /*days,
        repeatFrequency,
        reminders,
        reminderTimes,
        streak,
        completed,  
        lastCompleted, */
  };

  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
        /*dispatch(taskActions.addTask(task), */ navigation.navigate("TaskScreen"), 
        [dispatch]
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Add a Task Name:</Text>
        <TextInput
          autoCapitalize="sentences"
          autocorrect={true}
          value={name}
          onChangeText={(name) => setName(name)}
          style={styles.textInput}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.textStyle} onPress={onSubmit}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  textStyle: {
    margin: 5,
    fontSize: 20,
  },
  textInput: {
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
  },
});

export default connect(null)(AddTaskScreen);
