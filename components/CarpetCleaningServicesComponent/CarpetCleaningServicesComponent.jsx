import React, { Component, useRef } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class CarpetCleaningServices extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/5829610366b8c67b94092923e5cccba0' }}
                >
                
               
                    <View style={styles.textContatiner}>
                        <Text style={styles.title}>
                            Carpet Cleaning Services 
                        </Text>
                        <Text style={styles.information}>
                            Our carpet cleaning services gets deep cleaning right. We offer deep shampooing that cuts through grease, grime, and difficult stains. We are available weekly, weekends, and during emergencies.
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
