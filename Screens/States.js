import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import { STATES } from '../services/fetch-state-wise-data';

import SplashScreen from '../Components/SplashScreen';
import StatesDetails from '../Components/StatesDetails';

const States = ( { navigation } ) => {
    const [states, setStates] = useState( [] );
    const [loader, setLoader] = useState( true );

    useEffect( () => {
        STATES.getStateWiseData().then( res => {
            res.data.statewise.shift();
            setStates( res.data.statewise );
            setLoader( false );
        }, err => {
            console.error( err );
        } );
    }, [] );

    const gotoDistricts = ( stateName ) => {
        navigation.navigate( 'Districts', { name: stateName } );
    };
    return (
        <View style={ styles.container }>
            { loader ? <SplashScreen /> :
                <View style={ styles.listContainer }>
                    <Text style={ { paddingHorizontal: 20, fontSize: 30 } }>Tap on a State!</Text>
                    <FlatList data={ states } renderItem={ ( states ) => <TouchableHighlight onPress={ () => { gotoDistricts( states.item.state ); } }><StatesDetails title={ states } /></TouchableHighlight> } keyExtractor={ state => state.state } />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listContainer: {
        marginTop: 40,
        width: '100%'
    }
} );

export default States;
