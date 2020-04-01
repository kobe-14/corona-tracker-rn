import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { CORONA } from '../services/fetchdata';
import Items from '../Components/Items';
import SplashScreen from '../Components/SplashScreen';

const Home = ( { navigation } ) => {
    const [summary, setSummary] = useState( [] );
    const [loader, setLoader] = useState( true );

    useEffect( () => {
        CORONA.getAllData().then( res => {
            res.data.shift();
            setSummary( res.data );
            setLoader( false );
        }, err => {
            console.error( err );
        } );
    }, [] );

    const gotoStatesScreen = ( country ) => {
        navigation.navigate( 'Report', { name: country.item.Slug } );
    };

    return (
        <>
            { loader ? <SplashScreen /> :
                <View style={ styles.container }>
                    <View style={ styles.listContainer }>
                        <Text style={ { paddingHorizontal: 20, fontSize: 30 } }>Tap on a Country!</Text>
                        <FlatList data={ summary } renderItem={ ( Country ) => <TouchableHighlight onPress={ () => gotoStatesScreen( Country ) }><Items title={ Country } /></TouchableHighlight> } keyExtractor={ country => country.Country } />
                    </View>
                </View>
            }
        </>
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
export default Home;
