import React, { Component, useRef } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class MaidServices extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    
                    style={styles.background}
                    source={{ uri: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4239146.jpg&fm=jpg' }}
                >
                
               
                    <View style={styles.textContatiner}>
                        <Text style={styles.title}>
                            Maid Services 
                        </Text>
                        <Text style={styles.information}>
                            Full-time maid services that include washing, cleaning, folding, and organizing your daily or weekly needs.
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
