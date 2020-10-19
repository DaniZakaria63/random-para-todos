
// AUTHOR : Dani Zakaria

import React, { useState } from 'react';

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity

} from 'react-native';

const NewList=(props)=>{
    const [texttask,setTexttask]=useState(null);

    return (
        <View style={style.mainBackground}>
            <View style={style.verticalText}>
                <Text style={style.textHeader}>New Task</Text>
                <TouchableOpacity style={style.textSubmit} onPressIn={()=>props.textChange({text:texttask},true)} onPressOut={()=>props.textChange({text:texttask},false)}>
                    <Text style={{color:'#fff'}}>ADD</Text>
                </TouchableOpacity>
            </View>
            <TextInput
              style={style.inputHeader}
              placeholder={"Add new task in here"} 
              onChangeText={(text)=>setTexttask(text)}
              value={texttask}
              ></TextInput>
        </View>
    )
}
const style=StyleSheet.create({
    mainBackground:{
        backgroundColor:'#c62644',
        marginBottom:7,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        padding:20
    },
    verticalText:{
        display:"flex",
        flexDirection:'row',
        position:'relative'
    },  
    textHeader:{
        color:'#fff',
        fontSize:25,
    },
    textSubmit:{
        position:'absolute',
        right:5,
        top:5,
        paddingVertical:3,
        paddingHorizontal:5,
        borderRadius:5,
        backgroundColor:'#f3ac61',
    },
    inputHeader:{
        alignSelf:'stretch',
        color:'#000',
        padding:8,
        backgroundColor:'#fff',
        marginTop:5,
        marginBottom:10
    }
})
export default NewList;