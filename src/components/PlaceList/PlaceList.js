import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    // const placesOutput = props.places.map((place, i) => (
        
    //   ));
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem 
                placeImage={info.item.placeImage}
                placeName={info.item.name} 
                hasBeenClicked={()=>props.wasDeleted(info.item.key)}
            />
            )}
            />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%",
    }
});

export default placeList;