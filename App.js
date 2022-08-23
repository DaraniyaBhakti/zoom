/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { initZoom, joinMeeting, startMeeting } from './nativeModules/AwesomeZoomSDK';


const ZOOM_CONFIG = {
  ZOOM_PUBLIC_KEY : "qAcaGB-ZSlSUBFXgezzIRg",
  ZOOM_PRIVATE_KEY: "z5wh9O3MpD1ppcimBDS8Ajn1IUJKbLOaGFLl",
  ZOOM_DOMAIN: "zoom.us",
  JWT_API_KEY:"qAcaGB-ZSlSUBFXgezzIRg",
  JWT_API_SECRET_KEY: "z5wh9O3MpD1ppcimBDS8Ajn1IUJKbLOaGFLl"
}

const meetingNo = "";
const pwd = "";
const userId = "";
const userName = "";


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        
        <View style={styles.body}>
          
        <Button title="Init ZOOM" onPress={() => initZoom(ZOOM_CONFIG.ZOOM_PUBLIC_KEY, ZOOM_CONFIG.ZOOM_PRIVATE_KEY, ZOOM_CONFIG.ZOOM_DOMAIN)} />  

        <Button title ="joinMeeting" onPress={() => joinMeeting(userName, meetingNo, pwd)}/>

        <Button title ="start meeting" onPress={() => startMeeting(meetingNo, userName, userId, ZOOM_CONFIG.JWT_API_KEY, ZOOM_CONFIG.JWT_API_SECRET_KEY)}/>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'space-around'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
