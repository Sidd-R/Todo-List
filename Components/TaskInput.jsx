import { View,TextInput,Button,StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react';

export default function TaskInput({todo,setTodo,input,setInput}) {
  const [task, setTask] = useState('')

  const addTask = () => {
    setTodo(() => [...todo,{
      task: task,
      key: String(new Date().getTime())
    } ])
    setTask('')
    setInput(false)
    // setTodo([])
  }
  return <Modal visible={input} animationType={"fade"}> 
          <View style={styles.inputContainer}>
            <TextInput placeholder="Add Task" style={styles.inputField} onChangeText={e => setTask(e)} value={task} />
            <View style={styles.buttonGroup}>
              <View style={{marginHorizontal: 15,width:90}}>
                <Button title="Submit " onPress={addTask} />
              </View>
              <View style={{marginHorizontal: 15,width:90}}>
                <Button title="cancel" onPress={() => setInput(false)} color={"red"}/>
              </View>
            </View>
          </View>
        </Modal>
}
  

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "gray",
    // borderBottomWidth: 1,
    width: "80%",
    marginBottom: 15,
    marginHorizontal: 15,
    // marginTop: -550a task
  },
  inputField: {
    height: 40,
    width: "70%",
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    color: "rgb(20, 20, 25)",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  }
});
