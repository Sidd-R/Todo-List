import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";

export default function TaskList({todo,setTodo}) {
  const deleteTask = (e) => {
    // console.log(e._dispatchInstances._debugOwner.key);
    setTodo(() => todo.filter(f => f.key != e))
  }
  return (
    <View style={styles.listContainer}>
      <FlatList data={todo} renderItem={({item}) => {
        return( 
          <View style={styles.taskContainer}>
          <Pressable android_ripple={{color:"#fgggg8"}}  onPress={deleteTask.bind(this,item.key)}>
            <Text style={styles.text}  key={item.key}>{item.task}</Text>
          </Pressable>
          </View>)
      }} />      
    </View>
  )
}
  
const styles = StyleSheet.create({

listContainer: {
  flex: 8,
  marginTop:17
},
taskContainer: {
  // alignItems: "center",
  // justifyContent: "center",
  backgroundColor: "rgb(200, 200, 250)",
  borderWidth:1,
  borderRadius: 5,
  marginBottom: 15,
  marginHorizontal: 20,
  
},
text: { 
  padding: 10,

}
})