
// Author : Dani Zakaria

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import List from './src/List';
import NewList from './src/NewList';

const App= () => {
  const [text,setText]=useState([]);
  const [berubah,setBerubah]=useState(false);

  useEffect(()=>{
    getListText();
  },[]);
  useEffect(()=>{
    getListText();
  },[berubah])

  const getListText=async ()=>{
    const value= await AsyncStorage.getItem('list');

    if(value!==null){
      let hasil=JSON.parse(value);
      if(hasil.length>1){
        setText(hasil)
      }
      console.log(hasil)
    }
  }

  async function addListText(text1,status=true){
    function addNew(data){
      setText([{
        id:new Date().getMilliseconds(),
        text:data.text
      },
      ...text]);
      console.log("Berhasil Menyimpan "+JSON.stringify(text));
    }
    try{
      if(status)addNew(text1);
      save();
    }catch(e){
      console.log(e)
    }
  }
  const save=async()=>{
    var nilai=await AsyncStorage.setItem('list',JSON.stringify(text));
    return nilai;
  }


  async function deleteList(id){
    let kopi=text;

    const setLagi= async (item)=>{
      try{
        setText(item)
        await AsyncStorage.setItem('list',JSON.stringify(item));
        setBerubah(!berubah);
        console.log("Berhasil Menghapus "+id);
      }catch(e){
        console.log(e)
      }
    }

    for(var i in kopi){
      if(kopi[i].id==id){
        kopi.splice(i,1);
        setLagi(kopi);
        break;
      }
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <NewList textChange={(text1,status)=>addListText(text1,status)}/>
      <ScrollView>
        <List data={text} hasDelete={(id)=>deleteList(id)}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f6efe3'
  }
})

export default App;
