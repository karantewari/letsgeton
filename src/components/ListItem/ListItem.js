import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.hasBeenClicked}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} style={styles.placeImage}/>
            <Text style={styles.centeredText}>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection:"row",
        alignItems:"center",
    },
    centeredText:{
        textAlign:"center"
    },
    placeImage:{
        width:30,
        height:30,
        marginRight:5
    }
});

export default listItem;