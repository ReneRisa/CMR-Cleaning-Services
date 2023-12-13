import React, { Component, useRef } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class WindowWashingServices extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    
                    style={styles.background}
                    source={{ uri: 'https://tomlewispromaintenance.com/wp-content/uploads/2022/05/Home-Page-Window-Washer-_O.jpg' }}
                >
                
               
                    <View style={styles.textContatiner}>
                        <Text style={styles.title}>
                            Window Washing Services
                        </Text>
                        <Text style={styles.information}>
                            Our highly trained employees will make your home and business sparkle. Our products are environmentally friendly.
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
