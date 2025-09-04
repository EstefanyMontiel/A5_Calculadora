import { StyleSheet, Text, View, Switch, SafeAreaView} from 'react-native';
import React, { useState } from "react";
import { createContext } from 'react';
import { ThemeContext } from './src/context/ThemeContext'; //importa el tema 
import { Colors } from './src/styles/Colors'; //
import { Styles } from './src/styles/globalStyles'; //

import MyKeyboard from './src/components/MyKeyboard';
import Button from './src/components/Button'; //

export default function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext value={theme}>
      <SafeAreaView style={theme === 'light' ? 
        Styles.container : { ...Styles.container, backgroundColor: Colors.dark}}>
    <Switch
      value={theme === 'light'}
      onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
    <MyKeyboard />
  </SafeAreaView>
    </ThemeContext>


  );
}


