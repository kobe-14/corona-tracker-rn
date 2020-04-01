import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Loading!!!!!!!!!!</Text>
        </View>
    );
};

const styles = StyleSheet.create( {
    screen: {
        flex: 1,
        backgroundColor: '#4287f5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        color: '#fff'
    }
} );

export default SplashScreen;
