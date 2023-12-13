import React, { Component, useRef } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class MoveInMoveOutServices extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    
                    style={styles.background}
                    source={{ uri: 'https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_limit,w_1200/s3/2/10664/076%20one%20bedroom%20apartment.jpg' }}
                >
                
               
                    <View style={styles.textContatiner}>
                        <Text style={styles.title}>
                            Move-in/Move-out Services
                        </Text>
                        <Text style={styles.information}>
                            Moving into a new apartment or home can be a stressful time. So let us help by making your new place clean, free from germs, and allergens.  Moving out can be stressful especially when you must pass inspections. We provide top quality services that will impress the toughest landlord’s expectations.
                        </Text>
                    </View>
                </ImageBackground>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 38,
        textAlign: 'center',
        color: 'black',
        marginBottom: 15,
    },
    information: {
        margin: 24,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'charcoal',
    },
    background: {
        flex: 2,
    }
});
