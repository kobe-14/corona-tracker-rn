import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatesDetails = ( props ) => {
    return (
        <View style={ styles.item }>
            <Text>State: <Text style={ styles.title }>{ props.title.item.state }</Text></Text>
            <Text>Active: <Text style={ styles.title }>{ props.title.item.active }</Text></Text>
            <Text>Deaths: <Text style={ styles.title }>{ props.title.item.deaths }</Text></Text>
            <Text>Recovered: <Text style={ styles.title }>{ props.title.item.recovered }</Text></Text>
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
        color: '#c717fc',
        fontWeight: 'bold'
    },
} );

export default StatesDetails;
