import React, { useState } from 'react';
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

  const handleAdd = () => {
    let newItems = items.slice();
    const colorIdx = (newItems.length + 1) % 4;
    newItems.push({id: newItems.length + 1, color: colors[colorIdx]});
    setItems(newItems);
  }

  const handleRemove = () => {
    let newItems = items.slice();
    newItems.pop();
    setItems(newItems);
  }

  return (
    <View style={styles.page}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Wow! Check Out This Header!</Text>
      </View>
      <View style={styles.mainSection}>
        {getItems()}
      </View>
      <View style={styles.footerSection}>
        <Button color='grey' onPress={handleAdd} title='Add'></Button>
        <Button color='grey' onPress={handleRemove} title='Remove'></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%'
  },
  headerSection: {
    flex: 0.5,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    padding: 5
  },
  mainSection: {
    flex: 4,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-around'
  },
  footerSection: {
    flex: 0.25,
    backgroundColor: 'plum',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5
  }
});

export default App;
