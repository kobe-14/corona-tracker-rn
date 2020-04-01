import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Status from '../Components/Status';

const Report = ( props ) => {
    const [modal, setModal] = useState( false );
    const [country, setCountry] = useState( '' );
    const [status, setStatus] = useState( '' );

    const statusHandler = ( status ) => {
        setModal( true );
        setCountry( props.route.params.name );
        setStatus( status );
    };

    const closeModal = () => {
        setModal( false );
    };

    const goToState = () => {
        props.navigation.navigate( 'States' );
    };
    return (
        <View style={ styles.screen }>
            { modal ? <Status openModal={ modal } country={ country } status={ status } closeModal={ closeModal } /> : <></> }
            <View>
                <Text style={ styles.header }>Status</Text>
            </View>
            <View style={ styles.statusContainer }>
                <TouchableNativeFeedback onPress={ () => statusHandler( 'confirmed' ) }><View style={ styles.status }><Text>Confirmed</Text></View></TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={ () => statusHandler( 'recovered' ) }><View style={ styles.status }><Text>Recovered</Text></View></TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={ () => statusHandler( 'deaths' ) }><View style={ styles.status }><Text>Death</Text></View></TouchableNativeFeedback>
                { props.route.params.name === 'india' ?
                    <TouchableNativeFeedback onPress={ goToState }><View style={ styles.status }><Text>States</Text></View></TouchableNativeFeedback>
                    :
                    <></>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 50,
        color: '#c717fc'
    },
    statusContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    status: {
        // width: '80%',
        // maxWidth: '80%',
        // borderWidth: 2,
        // borderRadius: 2,
        // borderColor: '#000',
        // marginVertical: 10,
        // backgroundColor: '#cecece'
        // borderWidth: 2,
        // borderColor: '#c717fc',
        // padding: 10,
        // borderRadius: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginVertical: 10
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.76,
        backgroundColor: '#fff',
        elevation: 10,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10
    }
} );
export default Report;
