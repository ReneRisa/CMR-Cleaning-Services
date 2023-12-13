import React, { Component, useRef } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class CommercialCleaningServices extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/79238a1bc5c36f52ed8e0176efa38ade' }}
                >
                
               
                    <View style={styles.textContatiner}>
                        <Text style={styles.title}>
                            Commercial Cleaning Services 
                        </Text>
                        <Text style={styles.information}>
                            Let our company keep your business running smoothly while deep cleaning. We handle all unique situations. 
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
