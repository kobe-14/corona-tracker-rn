import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';

import { getDistricts } from '../redux/actions/districts.actions';
import DistrictItems from '../Components/DistrictsItems';
// import DistrictDetailsComponent from '../Components/DistrictDetailsComponent';

const Districts = ( props ) => {
    const [districtsData, setDistricts] = useState( [] );
    // const [modal, setModal] = useState( false );
    // const [districtDetails, setDistrictDetails] = useState( {} );
    useEffect( () => {
        if ( props.districts.districtsFetched === false ) {
            props.getAllDistricts();
        } else {
            if ( props.districts.districts[props.route.params.name] !== undefined )
                setDistricts( Object.keys( props.districts.districts[props.route.params.name].districtData ) );
        }
    }, [] );

    useEffect( () => {
        if ( props.districts.districts[props.route.params.name] !== undefined ) {
            setDistricts( Object.keys( props.districts.districts[props.route.params.name].districtData ) );
        }
    }, [props.districts] );

    const openModal = ( district ) => {
        Alert.alert(
            `${ district.item } Details:`,
            `Confirmed Cases: ${ props.districts.districts[props.route.params.name].districtData[district.item].confirmed }`,
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
        // setDistrictDetails( props.districts.districts[props.route.params.name].districtData[district.item] );
        // setModal( true );
    };

    // const closeModal = () => {
    //     setModal( false );
    // };

    return (
        <View style={ styles.container }>
            {/* { modal ? <DistrictDetailsComponent district={ districtDetails } open={ modal } closeModal={ closeModal } /> : <></> } */ }
            { districtsData.length > 0 ?
                <View style={ styles.listContainer }>
                    <Text style={ { paddingHorizontal: 20, fontSize: 30, justifyContent: 'center' } }>Tap on a District!</Text>
                    <FlatList data={ districtsData } renderItem={ ( districts ) => <TouchableHighlight onPress={ () => openModal( districts ) }><DistrictItems title={ districts } /></TouchableHighlight> } keyExtractor={ districts => districts } />
                </View>
                :
                <View>
                    <Text style={ { paddingHorizontal: 20, fontSize: 40 } }>No Data Available!</Text>
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

export default connect(
    state => ( {
        districts: state.districts
    } ),
    dispatch => ( {
        getAllDistricts: () => dispatch( getDistricts() )
    } )
)( Districts );