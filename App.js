import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const App: () => React$Node = () => {

  const colors = ['blue', 'purple', 'green', 'aquamarine'];
  let initItems = [];
  for (let i = 0; i < 10; i++) {
    let color = colors[i % 4];
    initItems.push({id: i, color: color});
  }
  const [items, setItems] = useState(initItems);

  const getItems = () => {
    return items.map(item => (
      <View key={item.id} style={{width: 50, height: 50, backgroundColor: item.color}}></View>
    ));
  }

  return (
    <View style={styles.page}>
      <View style={styles.headerSection}>
        <Text>This is my Header Text</Text>
      </View>
      <View style={styles.mainSection}>
        {getItems()}
      </View>
      <View style={styles.footerSection}>
        <Button title='Press Me'></Button>
        <Button title='Or Me'></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '75%'
  },
  headerSection: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainSection: {
    flex: 4,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-around'
  },
  footerSection: {
    flex: 1,
    backgroundColor: 'lightyellow',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default App;
