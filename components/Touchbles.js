import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight
} from 'react-native';

const Touchables = () => {
  onPress =()=>{
    // alert('hello')
  }
  return (
    <View style={styles.container}>
      {/* TouchableOpacity */}
      <TouchableOpacity  style={styles.touches}>
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>
      
      {/* TouchableNativeFeedback*/}
      <TouchableNativeFeedback>
      <View style={styles.touches}>
        <Text style={styles.text}>TouchableNativeFeedback</Text>
      </View>
    </TouchableNativeFeedback>
 
        <TouchableHighlight
         style = {styles.touches}
         onPress={this.onPress}
        >
         <Text style = {styles.text}> TouchableHighlight</Text>
        </TouchableHighlight>
 
    </View>
  )
}

export default Touchables;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#17859b'
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  touches: {
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30
  },
});
