import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusComponent = ( props ) => {
    return (
        <View style={ styles.item }>
            <View>
                <Text>{ ( props.statusDetails === 'confirmed' || props.statusDetails === 'recovered' ) ? 'Total Number of Cases' : 'Total Number of Deaths' } <Text style={ { color: '#c717fc', fontWeight: 'bold' } }>{ props.data.item.Cases }</Text></Text>
                <Text>Date and Time: <Text style={ { color: '#c717fc', fontWeight: 'bold' } }>{ props.data.item.Date }</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    item: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.76,
        backgroundColor: '#fff',
        elevation: 10,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        width: '100%'
    },
} );

export default StatusComponent;
