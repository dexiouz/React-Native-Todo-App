import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Flex = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{flex: 1, backgroundColor: '#007991'}}></View>
      <View style={{flex: 2, backgroundColor: '#439a86'}}></View>
      <View style={{flex: 3, backgroundColor: '#e9d985'}}></View>
      <View style={{flex: 4, backgroundColor: '#222e50'}}></View> */}
      {/* header */}
      <View style={styles.headerNav}>
        <TouchableOpacity>
          <Text style={styles.c4N}>Menu</Text>
        </TouchableOpacity>
        <Text style={styles.c4N}>Todo App</Text>
        <Text style={styles.c4N} >C4N</Text>
      </View>

      <View style={{flex: 4, padding: 10}}>
      <TouchableOpacity>
          <Text style={styles.cN}>Menu</Text>
        </TouchableOpacity>
        <Text style={styles.cN}>Todo App</Text>
        <Text style={styles.cN} >C4N</Text>
      </View>
    </View>
  );
}
export default Flex;


const styles = StyleSheet.create({
  headerNav:{
    flex: 1, 
    // alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 10,
    // borderBottomColor:'#ffffff',
    borderBottomWidth:0.5,
    // height:290,
    // marginTop:20,
    backgroundColor: '#222e50'
  },
  c4N:{
    fontSize: 24,
    fontWeight:'bold',
    color:'white',
    marginTop: 20
  },
  cN:{
    fontSize: 24,
    fontWeight:'bold',
    color:'white',
    marginTop: 20
  },
  gameDetails:{
    alignItems:'center',
    marginTop:10
  },
  textInput:{
    fontWeight:'bold',
    fontSize:19,
    color:'white'
  },
  playView:{
    alignItems:'center',
    position:'relative', 
    top:2
  },
  playText:{
    borderRadius:10,
    borderColor:'white',
    // shadowColor:#fff,
    shadowOpacity:0.5,
    borderWidth:0.9, 
    backgroundColor:'#0a392e',
    padding:19,
    fontWeight:'bold',
    fontSize:18,
    color:'white',
    textAlign:'center',  
  },
  whiteBackgroundView:{
    height:300,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#50d2c2', 
    backgroundColor:'white',
    margin:10,
    marginTop:20
  },
  gameAmountView:{
    alignItems:'center',
    height:120,
    padding:20
  },
  gameAmountText:{
    fontSize: 40,
    fontWeight:'bold',
    padding:20
  },
  leftRightView:{
    height:180,
    borderWidth:1,
    borderColor:'#50d2c2',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  leftView:{
    alignItems:'center',
    borderRightWidth:1,
    borderRightColor:'#50d2c2',
    width:170,
    borderRadius:0
  },
  balanceText:{
    fontWeight:'bold',
    padding:30,
    position:'relative', 
    top:30,
    fontSize:14,
  },
  currentBalance:{
    fontSize: 40,
    fontWeight:'bold', 
    position:'relative', 
    top:0,
  },
  weekRankView:{
    borderRadius:10,
    alignItems:'center',
    width:170 ,
    position:'relative', 
    right:6
  },
  weekRankText:{
    fontWeight:'bold',
    padding:30,
    position:'relative', 
    top:30,
    fontSize:14
  },
  weekRankIndicator:{
    fontWeight:'bold', 
    position:'relative', 
    top:0,
    fontSize:27
  },
  extraLivesView:{
    borderRadius:10,
    borderWidth:0.9,
    alignItems:'center', 
    height:60,
    width:340,
    margin:10,
    backgroundColor:'#0a392e',
    borderColor:'white', 
    marginTop:-4
  },
  extraLivesText:{
    fontWeight:'bold',
    fontSize:18,
    padding:10,
    position: 'relative',
    top: 6,
    color:'white'
  }
});