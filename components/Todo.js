import React from "react";
import Menu from "./Menu";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicator,
  DrawerLayoutAndroid,
  TouchableNativeFeedback
} from "react-native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import uuid from "uuid";
export default class Todo extends React.Component {
  state = {
    newTodo: "",
    todos: [],
    isAnimating: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const jsonState = JSON.stringify(this.state.todos);

      AsyncStorage.setItem("todos", jsonState)
        .then(value => value)
        .catch(err => console.warn(err));
    }
  }

  componentDidMount() {
    //  setState here
    this.setState({
      isAnimating: true
    });
    //setTimeout here
    setTimeout(() => {
      AsyncStorage.getItem("todos")
        .then(value => {
          if (value !== null) {
            let valueToArray = JSON.parse(value);
            this.setState({
              todos: valueToArray,
              isAnimating: false
            });
          }
        })
        .catch(err => console.warn(err));
    }, 3000);
  }

  addTodo = () => {
    if (!this.state.newTodo) {
      return;
    }
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(this.state.newTodo),
        newTodo: (prevState.newTodo = "")
      };
    });
  };

  handleChangeText = newTodo => {
    this.setState({ newTodo });
  };

  handleDeleteAll = () => {
    this.setState({
      todos: []
    });
  };

  handleDeleteOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todoItem => todoItem !== itemToBeRemoved)
    }));
  };

  alert = item => {
    alert(item);
  };
  openDrawer=()=>{
    this.drawer.openDrawer()
  }

  closeDrawer=()=>{
    this.drawer.closeDrawer()
  }
 
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      //container View
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (
          <Menu
            navigation={this.props.navigation}
            closeDrawer={this.closeDrawer}
          />
        )}
        ref={_drawer => {
          this.drawer = _drawer;
        }}
      >
        <View style={styles.container}>
          {/* Header View */}
          <View style={styles.headerContainer}>
            <TouchableNativeFeedback onPress={(onPress = this.openDrawer)}>
              <View>
                <Ionicons name="md-menu" size={32} color="white" />
              </View>
            </TouchableNativeFeedback>
            <Text style={styles.headerText}> Todo App </Text>
            <AntDesign name="setting" size={32} color="white" />
          </View>

          {/* Body View */}
          <View style={styles.body}>
            {/* Input and Button View */}
            {/* TextInput */}
            <View style={styles.textAndButtonView}>
              <TextInput
                style={styles.textInput}
                value={this.state.newTodo}
                underlineColorAndroid="transparent"
                placeholder="New Todo"
                placeholderTextColor="gray"
                autoCapitalize="none"
                onChangeText={this.handleChangeText}
              />

              {/* Button */}
              <TouchableOpacity
                onPress={this.addTodo}
                style={styles.addButtonText}
              >
                <Entypo name="add-to-list" size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Todo Items View */}
            {this.state.isAnimating && (
              <ActivityIndicator size="large" color="#222e50" />
            )}
            <FlatList
              data={this.state.todos}
              renderItem={({ item }) => (
                <View style={styles.renderItemView}>
                  <Text
                    onPress={e => {
                      this.alert(item);
                    }}
                    style={styles.todoItemText}
                  >
                    {item}
                  </Text>
                  <TouchableOpacity
                    onPress={e => {
                      this.handleDeleteOneItem(item);
                    }}
                  >
                    <Text style={styles.deleteItemText}>X</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => uuid()}
            />

            {/* Remove all button */}
            <TouchableHighlight
              style={styles.removeButton}
              onPress={this.handleDeleteAll}
            >
              <Text style={styles.buttonText}> Remove all</Text>
            </TouchableHighlight>
          </View>

          {/* Footer View */}
          <View style={{ flex: 1, backgroundColor: "#222e50" }} />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    color: "white",
    fontSize: 20
  },
  headerContainer: {
    flex: 1,
    paddingBottom: 4,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#222e50",
    alignItems: "flex-end",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 0.5
  },
  todoText: {
    color: "#222e50",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 14,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#222e50"
  },
  textInput: {
    marginBottom: 10,
    width: "73%",
    height: 40,
    borderColor: "#222e50",
    borderWidth: 0.1,
    padding: 10,
    borderRadius: 5
  },
  body: {
    flex: 5,
    padding: 10,
    backgroundColor: "white"
  },
  buttonText: {
    color: "white",
    fontSize: 15
  },
  addButtonText: {
    backgroundColor: "#222e50",
    width: "23%",
    padding: 10,
    height: "80%",
    borderRadius: 5,
    alignItems: "center"
  },
  textAndButtonView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  removeButton: {
    backgroundColor: "#222e50",
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center"
  },

  renderItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#222e50",
    padding: 10,
    marginTop: 10
  },
  todoItemText: {
    color: "#222e50",
    fontSize: 16,
    backgroundColor: "transparent"
  },
  deleteItemText: {
    fontWeight: "900",
    color: "red",
    fontSize: 19
  }
});

{
  /* Todo Items View */
}
//  <ScrollView>
//  <View>
//      {
//        this.state.todos.map(item => {
//          return (
//            <View key={uuid()} style={styles.renderItemView}>
//              <Text style={styles.todoItemText}>{item}</Text>
//              <TouchableOpacity onPress={(e) => {
//                this.handleDeleteOneItem(item)
//              }} >
//                <Text style={styles.deleteItemText}>X</Text>
//              </TouchableOpacity>
//            </View>
//          )
//        })
//      }
//  </View>
//    </ScrollView>

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
