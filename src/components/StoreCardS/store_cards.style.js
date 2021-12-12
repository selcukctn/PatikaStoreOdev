import { StyleSheet, Dimensions } from "react-native";

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor:'#eceff1',
        margin:10,
        borderRadius:10,
        flex:1
        
    },
    body_container:{
        padding:10,
        
    },
    descreption_container:{
        margin:10,
    },
    image:{
        height:height/4,
        borderRadius:10,
    },
    title:{
        fontWeight:'bold',
        fontSize:25,
        color:'#0e0e0e'
    },
    stock_title:{
        color:'red',
        fontSize:18,
    },
    price:{
        fontSize:18,
    },
})