/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import AppNav from './src/navigation/AppNav';
import { createStore } from 'redux';
import { Provider } from "react-redux";

const initialState = {
  counter:0
}

const reducer = (state= initialState, action) => {
  switch(action.type)
  {
    case 'INCREASE_COUNTER':
      return {counter: state.counter+1}
      case 'DECREASE_COUNTER':
      return {counter: state.counter-1}
  }
    return state
}

export const store = createStore(reducer);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            borderWidth:1,
            flex:1
          }}>
            <Provider store={store}>
         <AppNav/>
         </Provider>
        </View>
      
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
