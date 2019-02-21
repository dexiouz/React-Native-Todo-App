import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { black } from 'ansi-colors';
class Likes extends Component {
  state = {
    likes: 0
  }

  //increaseLikes handler
  increaseLikes = () => {
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1
      }
    })
  }
  // decreaseLikes handler
  decreaseLikes = () => {
    this.state.likes &&
    (this.setState((prevState) => {
      return {
        likes: prevState.likes - 1
      }
    }))
  }
  // resetLikes handler
  resetLikes = () => {
    this.setState(() => {
      return {
        likes: 0
      }
    })
  }


  static navigationOptions = {
      title: 'Likes App',
      headerStyle:{
        backgroundColor: '#222e50',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
      },
  
      headerRight: (
        <Button
         title="button"
         color="#222e50"
        onPress={this.onPress}
        />
      ),
      headerLeft: (
        <TouchableOpacity style = {{padding: 6, borderWidth: .8, borderColor: 'black'}}>
          <Text style = {{color: 'white', fontSize: 16, fontWeight: 'bold'}}>button</Text>
        </TouchableOpacity>
      ),
  };

//   static navigationOptions = ({ navigation }) => {
//     const { params = {} } = navigation.state;
//     return {
//       title: 'Likes App',
//       headerStyle:{
//         backgroundColor: '#222e50',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
  
//       headerRight: (
//         <Button
//          title="button"
//          color="#222e50"
//         //  onPress={() => params.increaseLikes()} 
//         //  onPress={navigation.getParam('increaseLikes')}
//         onPress={this.onPress}
//         />
//       ),

//       headerLeft: (
//         <TouchableOpacity style = {{padding: 6, borderWidth: .8, borderColor: 'black'}}>
//           <Text style = {{color: 'white', fontSize: 16, fontWeight: 'bold'}}>button</Text>
//         </TouchableOpacity>
//       ),
//     };
// };

  componentDidMount() {
    this.props.navigation.setParams({ increaseLikes: this.increaseLikes })
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>Welcome to my Likes App</Text>
        <Text style={styles.text}> Likes: {this.state.likes} </Text>

       <View style = {styles.btn}> 
        <Button
          onPress={this.increaseLikes}
          title="like"
          color="blue"
        />
       </View> 
      <View style = {styles.btn}>
        <Button
          onPress={this.decreaseLikes}
          title="unlike"
          color="#841584"
        />
      </View>
      <View style = {styles.btn}>
        <Button
          onPress={this.resetLikes}
          title="reset"
          color="red"
          disabled={this.state.likes <= 0}
        />
      </View>

      </View>
    )
  }
}
export default Likes;

const styles = StyleSheet.create({
  btn: {
    padding: 10 
  },
  text: {
    fontWeight: 'bold'
  }
});