import React from 'react';
import { View, StyleSheet } from 'react-native';

const App: () => React$Node = () => {
  return (
    <View>
      <View style={styles.mainGrid}>
        <View style={styles.mainRow}>
          <View style={{flex: 1, background: 'lightblue'}}></View>
          <View style={{flex: 2}}></View>
        </View>
        <View style={styles.mainRow}></View>
        <View style={styles.mainRow}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainGrid: {
    background: 'lightgray',
    width: '100%',
    height: '50%'
  },
  mainRow: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default App;
