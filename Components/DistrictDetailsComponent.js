import React from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';

const DistrictDetailsComponent = ( props ) => {
    console.log( 'props :', props );
    return (
        <Modal animationType='slide' visible={ props.open } >
            <View>
                <Text>Modal</Text>
            </View>
            <Button title='Close Modal' onPress={ props.closeModal } />
        </Modal>
    );
};

export default DistrictDetailsComponent;
