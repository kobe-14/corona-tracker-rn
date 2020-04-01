import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Items = ( props ) => {
    return (
        <View style={ styles.item }>
            <Text style={ styles.title }>{ props.title.item.Country }</Text>
        </View>
    );
};

const styles = StyleSheet.create( {
    item: {
        // backgroundColor: '#f9c2ff',
        // padding: 20,
        // marginVertical: 8,
        // marginHorizontal: 16,
        // width: '100%'
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.76,
        backgroundColor: '#fff',
        elevation: 10,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        color: '#c717fc'
    },
} );

export default Items;
