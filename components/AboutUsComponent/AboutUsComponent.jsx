import React, { Component, useRef } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class AboutUs extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    
                    style={styles.overlary}
                    source={{ uri: 'https://www.prolifttoyota.com/wp-content/uploads/2022/01/Scrubmaster-B120R-Rider-Scrubber-300x300.jpg' }}
                >
                
               
                    <View style={styles.textContatiner}>
                        <Text style={styles.title}>
                            About Us
                        </Text>
                        <Text style={styles.information}>
                            We are a high-quality and professional cleaning company that caters to each client's unique white glove desired services. Currently we are serving the greater Reno
                            area and continuing to expand in the near future. Our unique white glove services include top quality care for your home,
                            office, construction sites, and more! We provide services 24-hours a day, 7 days a week. Please
                            call us today for a FREE ESTIMATE. Se Habla Espanol
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
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    title: {
        fontSize: 38,
        textAlign: 'center',
        color: 'blue',
        marginBottom: 15,
    },
    information: {
        margin: 24,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'charcoal',
    },
});
