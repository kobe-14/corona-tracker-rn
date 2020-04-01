import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, FlatList, Button } from 'react-native';
import { CORONA } from '../services/fetchdata';
import StatusComponent from './StatusComponent';
import SplashScreen from './SplashScreen';


const Status = ( props ) => {
    const [statusData, setStatusData] = useState( [] );
    const [loader, setLoader] = useState( true );

    useEffect( () => {
        CORONA.getCountryData( props.country, props.status ).then( res => {
            setStatusData( res.data.reverse() );
            setLoader( false );
        }, err => {
            console.error( err );
        } );
    }, [] );
    return (
        <Modal animationType='slide' visible={ props.open }>
            { loader ? <SplashScreen /> :
                <>
                    <Button title='Close Modal' onPress={ props.closeModal } />
                    <View style={ styles.screen }>
                        <FlatList
                            data={ statusData }
                            renderItem={ ( status ) => <StatusComponent data={ status } statusDetails={ props.status } /> }
                            keyExtractor={ ( country ) => country.Date }
                        />
                    </View>
                </>
            }
        </Modal>
    );
};

const styles = StyleSheet.create( {
    screen: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%'
    }
} );

export default Status;
