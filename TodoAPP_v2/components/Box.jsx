import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, FlatList, TouchableOpacity } from "react-native";

function Box() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (text) => {
    setTask(text); // Atualize o estado da tarefa ao digitar
  };

  const handleCreateTask = () => {
    if (task) {
      setTaskList([...taskList, { text: task, id: Math.random().toString() }]);
      setCount(count + 1);
      setTask("");
    } else {
      Alert.alert("Please enter a task.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Task Manager</Text>
      <View style={styles.spam}>
        <Text style={styles.spamText}>Add Tasks</Text>
        <Text style={styles.spamText}>You have {count} Tasks Created!</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Task:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task here"
          value={task}
          onChangeText={handleTaskChange}
        />
        <TouchableOpacity
          style={[styles.button, { marginTop: 10 }]} // Adicione margem superior ao botão
          onPress={handleCreateTask}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Create Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontFamily: 'Arial',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  spam: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  spamText: {
    color: 'green',
  },
  inputContainer: {
    margin: 10,
  },
  label: {
    color: 'white',
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItem: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default Box;
