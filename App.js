import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList'
import { StyleSheet, Text, View, Button,Image} from "react-native";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState(false)
  
  return (
    <>
    <StatusBar style="dark"/>
    <View style={styles.container}>
      <Image source={require("./assets/images/Task-List-PNG-Picture.png")} style={styles.image} />
      <View style={styles.container}>
        <Button title={"add task"} onPress={() => setInput(true)} />
      </View>
      <TaskInput setTodo={setTodo} todo={todo} input={input} setInput={setInput}/>
      <TaskList todo={todo}  setTodo={setTodo}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#Cff2",
    paddingTop: 20,
    paddingHorizontal: 15
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "gray",
    borderBottomWidth: 1,
    // width: "80%",
    marginBottom: 15
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
  image: {
    // width: 100,
    height: 300,
    resizeMode: "contain",
    alignItems:"center",
    justifyContent:"center",
    marginStart: -200 ,
    marginBottom: -50,
  
  }
});
