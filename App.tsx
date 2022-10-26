import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Background, SView } from './src/assets/styles/global.styles';
import { Intimacy } from './src/screens/Intimacy/Intimacy';

export default function App() {
  return (
    <SView>
      <Background
        resizeMethod='auto'
        resizeMode='cover'
        source={require('./src/assets/images/bg.png')}
      >
        <StatusBar style='inverted' />
        <Intimacy />
      </Background>
    </SView>
  );
}
