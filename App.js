import React from 'react';
import AppContainer from './navigation';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <AppContainer />
    </View>
  );
}