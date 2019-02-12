import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import uuid from 'uuid'

export default class List extends React.Component {
  render() {
    const Todos = [
      {name: 'Study', priority: 'high', completed: 'true', id:uuid()},
      {name: 'visit', priority: 'low', completed: 'false', id:uuid()},
      {name: 'Code', priority: 'high', completed: 'false', id:uuid()},
      {name: 'Walk', priority: 'medium', completed: 'true', id:uuid()},
      {name: 'Bath the dog', priority: 'low', completed: 'false', id:uuid()},
      {name: 'Shopping', priority: 'low', completed: 'false', id:uuid()},
      {name: 'Clear workspace', priority: 'high', completed: 'true', id:uuid()},
      {name: 'sleep', priority: 'medium', completed: 'false', id:uuid()},
      {name: 'Set the day plan', priority: 'high', completed: 'true', id:uuid()},
      {name: 'Eat', priority: 'medium', completed: 'true', id:uuid()},
      {name: 'play soccer', priority: 'high', completed: 'true', id:uuid()},
      {name: 'Pray', priority: 'medium', completed: 'false', id:uuid()},
      {name: 'watch netflix', priority: 'high', completed: 'true', id:uuid()},
      {name: 'meditation', priority: 'medium', completed: 'true', id:uuid()}
    ]
    return (
      <View style={styles.container}>
      <ScrollView>
        {
          Todos.map(todoItem => {
            return (
              <Text key={todoItem.id} style= {styles.todoText}>{todoItem.name}</Text>
            )
          })
        }
      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#17859b' ,
    marginTop: 30,
    padding: 10
  },
  todoText: {
    color: 'white',
    fontSize: 16,
    backgroundColor:'#222e50',
    padding: 10,
    marginTop: 14,
    borderRadius: 5
  }
});
