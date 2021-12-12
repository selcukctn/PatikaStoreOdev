import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, FlatList } from 'react-native';

import store_data from './components/data/store_data.json'
import StoreCardS from './components/StoreCardS/StoreCardS';

const App = () =>{
  const [text, setText] = useState('');
  const renderItem = ({item})=><StoreCardS product={item}/>
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>PATIKASTORE</Text>
        <TextInput
          placeholder='Ara...'
          style={styles.text_input}
          onChangeText={text =>setText(text)}
          defaultValue={text}
        />
      </View>
        <FlatList
          keyExtractor={(item,index)=>item.id}
          data={store_data}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{justifyContent:'space-between'}}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    flex:1,
  },
  header:{
    padding:10
  },
  header_title:{
    fontSize:40,
    fontWeight:'bold',
    color:'#800080'
  },
  text_input:{
    backgroundColor:'#eceff1',
    fontSize:20,
    padding:10,
    borderRadius:10,
    marginTop:10,
  },
  body:{
    
  },
  //#eceff1 card color
})


export default App;