import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Item from './Item';
import Movies from './movies.json'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const List = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={Movies}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {
                    return (
                       <Item {...item} /> 
                    );
                }}
            />
        </View>
    );
}

export default List;