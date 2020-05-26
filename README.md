# React Native Views
This repository is one of my first React Native applications in which I learned how to create some grid layouts using View and StyleSheet.

This application uses:
* React View Component
* React Button Component
* React StyleSheet
* following flexbox style attributes are utilized:
  * flexDirection
  * justifyContent
  * alignItems
  * flexWrap
  * flex
  * width/height
  * position
-----

## Create a Grid Layout Using React Native View and StyleSheet
Creating sections within a parent view is as easy as setting the flex style attribute of the children. Create a child view for each section and set the flex attribute to a single integer marking it's ratio of the overall parent view size.  For instance, if you want 3 equally sized sections, set `flex: 1` for each view.

The code below is where I started.  This creates a parent view which covers 75% of the screen height.  Within this parent view, are three children; the header, main, and footer sections.  By setting the flex attributes this way, the header and footer are both 1/6th the size of the parent, while the main section is 4/6ths the size.

```import React from 'react';
import { View, StyleSheet } from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.page}>
      <View style={styles.headerSection}></View>
      <View style={styles.mainSection}></View>
      <View style={styles.footerSection}></View>
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
    backgroundColor: 'lightblue'
  },
  mainSection: {
    flex: 4,
    backgroundColor: 'grey'
  },
  footerSection: {
    flex: 1,
    backgroundColor: 'lightyellow'
  }
});

export default App;
```
By setting background colors on each section, it is easy to see where each section starts and ends.
