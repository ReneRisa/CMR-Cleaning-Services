import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Dimensions,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
//import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    inputValue: 'Name',
    inputValue1: 'E-mail',
    inputValue2: 'Message',
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView>
          <View style={styles.containerHeader}>
            <Text style={styles.title}>CMR Cleaning Services</Text>
            <Text style={styles.information}>
              Reliable house cleaning professionals serving the greater Reno
              area. We provide one of the best cleaning services for home,
              office, construction sites, and more! We can take on any job at
              any time. All equipment is included at no extra charge. Please
              call us today for a FREE ESTIMATE. Se Habla Espanol
            </Text>
            <Text style={styles.paragraphCellPhone}>
              Call Now (775)-507-8158
            </Text>

            <TouchableHighlight
              onPress={() => {
                alert('This button will take you to the contact us form');
              }}>
              <Text style={styles.paragraphButtonQuote}>Get a Quote</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.containerServices}>
            <View style={styles.containerLeft}>
              <TouchableHighlight
                onPress={() => {
                  alert('Home Cleaning Section');
                }}>
                <Image
                  style={styles.containerImage}
                  source={{
                    uri: 'https://codehs.com/uploads/e4bbb02828471aeba80d5b19daa24eca',
                  }}
                />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  alert('Window Washing Section');
                }}>
                <Image
                  style={styles.containerImage}
                  source={{
                    uri: 'https://codehs.com/uploads/6b19325e1935ee43e75ab139f32de2e8',
                  }}
                />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  alert('Move-in/Move-out Section');
                }}>
                <Image
                  style={styles.containerImage}
                  source={{
                    uri: 'https://codehs.com/uploads/b76d7fc259d2a887e59425a42bb95703',
                  }}
                />
              </TouchableHighlight>
            </View>

            <View style={styles.containerRight}>
              <TouchableHighlight
                onPress={() => {
                  alert('Maid Services Section');
                }}>
                <Image
                  style={styles.containerImage}
                  source={{
                    uri: 'https://codehs.com/uploads/f3ee1e5f008fc8d0157a03a439875174',
                  }}
                />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  alert('Comercial Cleaning Section');
                }}>
                <Image
                  style={styles.containerImage}
                  source={{
                    uri: 'https://codehs.com/uploads/2d86d10df16a428e9094e6276dd1aedd',
                  }}
                />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  alert('Carpet Cleaning Section');
                }}>
                <Image
                  style={styles.containerImage}
                  source={{
                    uri: 'https://codehs.com/uploads/5b652df4313dd8474aa9e386ac329faa',
                  }}
                />
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.containerContact}>
            <Text style={styles.paragraphContact}>Contact Us</Text>
            <View style={styles.containerContactName}>
              <TextInput
                placeholder="Name"
                onChangeText={(inputValue) => this.setState({ inputValue })}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Email"
                onChangeText={(inputValue1) => this.setState({ inputValue1 })}
                style={styles.textInput}
              />
            </View>
            <TextInput
              onChangeText={(inputValue2) => this.setState({ inputValue2 })}
              style={styles.textInputMessage}
              placeholder="Message"
              multiline={true}
            />
            <TouchableHighlight
              onPress={() => {
                alert('This will submit a form with the information provided');
              }}>
              <View style={styles.buttonSubmit}>
                <Text style={styles.paragraphButtonSubmit}>Submit</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  containerHeader: {
    height: 4.6 * (deviceHeight / 10),
    backgroundColor: 'white',
    width: 9.6 * (deviceWidth / 10),
    alignItems: 'center',
  },
  containerContact: {
    height: 5 * (deviceHeight / 10),
    backgroundColor: 'white',
    width: deviceWidth,
    alignItems: 'center',
  },
  containerContactName: {
    flexDirection: 'row',
    height: 0.6 * (deviceHeight / 10),
    width: 10 * (deviceWidth / 10),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraphContact: {
    color: 'black',
    textAlign: 'center',
    fontSize: deviceHeight / 30,
    marginTop: 2,
    marginBottom: 2,
  },
  textInput: {
    height: 0.5 * (deviceHeight / 10),
    width: 4.5 * (deviceWidth / 10),
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    margin: 3,
    paddingStart: 6,
  },
  textInputMessage: {
    height: 2 * (deviceHeight / 10),
    width: 9.3 * (deviceWidth / 10),
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 3,
    paddingStart: 6,
    multiline: 'true',
    numberOfLines: 1,
    scrollEnabled: 'true',
    rows: 1,
  },
  buttonSubmit: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#E5E059',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  containerServices: {
    height: 10 * (deviceHeight / 10),
    backgroundColor: 'white',
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLeft: {
    width: 9 * (deviceWidth / 10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRight: {
    width: 9 * (deviceWidth / 10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    height: 1.4 * (deviceHeight / 10),
    width: 8.5 * (deviceWidth / 10),
    borderRadius: 10,
    marginTop: 1,
    marginBottom: 15,
  },
  paragraphButtonQuote: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#E5E059',
    marginTop: 8,
    padding: 10,
    borderRadius: 10,
  },
  paragraphCellPhone: {
    color: 'blue',
    textAlign: 'center',
    fontSize: deviceHeight / 45,
    marginTop: 6,
    marginBottom: 6,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: deviceHeight / 20,
    marginTop: 1,
  },
  information: {
    color: 'silver',
    textAlign: 'justify',
    marginTop: 6,
    marginEnd: 12,
    marginStart: 12,
    marginBottom: 5,
    padding: 5,
    fontSize: deviceHeight / 55,
  },
});
