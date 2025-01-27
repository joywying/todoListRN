import React, {useState} from 'react';
// useState is a hook for functional components
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import Task from './components/Task'
import { getTasks as getDBTasks, setTasks as setDBTasks } from './firebaseDatabase.js'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  // Pull data from the database
  const handleRefresh = async () => {
    console.log("Refreshing")
    allTasks = await getDBTasks()
    if (allTasks) {
      setTaskItems(allTasks)
    }
  }
  
  // Add a task when the plus button is clicked
  const handleAddTask = async () => {
    newTasks = [...taskItems, task]
    await setDBTasks(newTasks)
    await handleRefresh()
    setTask(null)
  };

  // Remove a task when a user clicks it
  const completeTask = async (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    await setDBTasks(itemsCopy)
    await handleRefresh()
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style = {styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
        {
           taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                <Task text={item} /> 
              </TouchableOpacity>
            )
        })
      }
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TouchableOpacity onPress={() => handleRefresh()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Refresh</Text>
          </View>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: '-0.025',
    color: '#445C82'
  }, 
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
