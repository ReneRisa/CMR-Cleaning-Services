import React, { Component, useRef } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class HomeCleaningServices extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/c7fae79066fe4c727e313b55504d4100' }}
                >
                
               
                    <View style={styles.textContatiner}>
                        <Text style={styles.title}>
                            Home Cleaning Services
                        </Text>
                        <Text style={styles.information}>
                            Our high-quality home cleaning services includes products that are safe for the environment, safe your family, and pets. We take pride in our work by handling and organizing the toughest jobs. Let our company take the stress out of cleaning.{"\n"}
                            Kitchen{"\n"}
                            Bathroom{"\n"}
                            Bedroom{"\n"}
                            Dining Room{"\n"}
                            Living Room{"\n"}
                            Laundry Room{"\n"}
                            Garage{"\n"}
                            Back Patio{"\n"}
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
