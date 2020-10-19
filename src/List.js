
// AUTHOR : Dani Zakaria

import React,{useEffect,useState} from 'react';
import {SafeAreaView,FlatList, StyleSheet,View,Text, TouchableOpacity, ToastAndroid} from 'react-native';

const List=(props)=>{
    const [selectedID,setSelectedID]=useState(null);

    const listItem=({item})=>{
        const onDelete=()=>{
            setSelectedID(item.id)
            props.hasDelete(selectedID)
        }
        return (
            <View style={styles.box}>
                <Text style={styles.kalimat}>{item.text}</Text>
                <TouchableOpacity onPressIn={onDelete} onPressOut={onDelete} style={styles.delete}>
                    <Text style={{color:"#fff"}}>Delete</Text>
                 </TouchableOpacity>
            </View>
        )
    }

    return  (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={props.data}
                renderItem={listItem}
                keyExtractor={item=>item.id.toString()}
                extraData={selectedID}
                />
        </SafeAreaView>
    )
    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        marginVertical:5,
        paddingVertical:15,
        paddingHorizontal:25,
        backgroundColor:'#8ad2c6',
        display:"flex",
        flexDirection:"row",
        position:'relative',
    },
    kalimat:{
        color:'#f6efe3',
        fontSize:20
    },
    delete:{
        backgroundColor:'#c62644',
        color:'#fff',
        position:'absolute',
        right:10,
        alignSelf:'center',
        paddingHorizontal:5,
        paddingVertical:2
    }
})
export default List;