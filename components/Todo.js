import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import uuid from 'uuid'
export default class Todo extends React.Component {
  state = {
    newTodo: "",
    todos: [
       'Study' ,
       'code' ,
       'eat' ,
    ]
  }

  addTodo = () => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat(this.state.newTodo),
        newTodo: prevState.newTodo = ''
      }
    })
  }
  handleChangeText = (newTodo) => {
    this.setState({ newTodo })
  }
  render() {
    return (
      //container View
      <View style={styles.container}>
        {/* Header View */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Menu </Text>
          <Text style={styles.headerText}> Todo App </Text>
          <Text style={styles.headerText}> Settings </Text>
        </View>

        {/* Body View */}
        <View style={styles.body}>

          {/* Input and Button View */}
          {/* TextInput */}
          <View style={styles.textAndButtonView} >
            <TextInput style={styles.textInput}
              value = {this.state.newTodo}
              underlineColorAndroid="transparent"
              placeholder="New Todo"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={this.handleChangeText}
            />

            {/* Button */}
            <TouchableOpacity onPress = {this.addTodo} style={styles.addButton}>
              <Text  style={styles.addButtontext}>
                add todo
              </Text>
            </TouchableOpacity>
          </View>

          {/* Todo Items View */}
          <View>
            <FlatList
              data={this.state.todos}
              renderItem={( {item} ) => 
              <Text style={styles.todoText}>
                {item}
              </Text>}
              keyExtractor={item => uuid()}
            />
          </View>

        </View>

        {/* Footer View */}
        <View style={{ flex: 1, backgroundColor: '#222e50' }}>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  headerContainer: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#222e50',
    alignItems: 'flex-end',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 0.5,
  },
  todoText: {
    color: '#222e50',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 14,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: .5,
    borderColor: '#222e50'
  },
  textInput: {
    marginBottom: 10,
    width: '73%',
    height: 40,
    borderColor: '#222e50',
    borderWidth: .1,
    padding: 10,
    borderRadius: 5,
  },
  body: {
    flex: 5,
    padding: 10,
    backgroundColor: 'white'
  },
  addButtontext: {
    color: 'white',
    fontSize: 15
  },
  addButton: {
    padding: 8,
    backgroundColor: '#222e50',
    borderRadius: 5,
    marginBottom: 30,
    width: '25%'
  },
  textAndButtonView: { 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
});

















// const Todos = [
//   {name: 'Study', priority: 'high', completed: 'true', id:uuid()},
//   {name: 'visit', priority: 'low', completed: 'false', id:uuid()},
//   {name: 'Code', priority: 'high', completed: 'false', id:uuid()},
//   {name: 'Walk', priority: 'medium', completed: 'true', id:uuid()},
//   {name: 'Bath the dog', priority: 'low', completed: 'false', id:uuid()},
//   {name: 'Shopping', priority: 'low', completed: 'false', id:uuid()},
//   {name: 'Clear workspace', priority: 'high', completed: 'true', id:uuid()},
//   {name: 'sleep', priority: 'medium', completed: 'false', id:uuid()},
//   {name: 'Set the day plan', priority: 'high', completed: 'true', id:uuid()},
//   {name: 'Eat', priority: 'medium', completed: 'true', id:uuid()},
//   {name: 'play soccer', priority: 'high', completed: 'true', id:uuid()},
//   {name: 'Pray', priority: 'medium', completed: 'false', id:uuid()},
//   {name: 'watch netflix', priority: 'high', completed: 'true', id:uuid()},
//   {name: 'meditation', priority: 'medium', completed: 'true', id:uuid()}
// ]

// For adding delete
// renderItem={({item}) =>(
//   <View style = {{flexDirection: 'row', justifyContent: 'space-between', borderRadius: 5, borderWidth: .5, borderColor: '#222e50', padding: 14, marginTop: 10}}>
//     <TouchableOpacity><Text style={styles.todoText}>{item.name}</Text> </TouchableOpacity>
//     <TouchableOpacity><Text style = {{fontWeight: 'bold'}}>X</Text></TouchableOpacity>
//    </View>
// )}
        // SECTIONlIST
// import React, { Component } from 'react';
// import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'K', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })
