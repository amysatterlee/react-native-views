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

The code below is where I started.  This creates a parent view which covers 75% of the screen height.  Within this parent view are three children; the header, main, and footer sections.  By setting the flex attributes this way, the header and footer are both 1/6th the size of the parent, while the main section is 4/6ths the size.

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

Once I had a basic layout, I could add children to each of the sections, creating nested grids and controlling the placement of text with just a few style attributes. To control the placement of text in the header view, use `justifyContent` and `alignItems` otherwise the default placement is top and left. To add two evenly spaced buttons to the footer, use `justifyContent: 'space-around'` and `flexDirection: 'row'`.

Here is the modified JSX:
``` 
<View style={styles.page}>
  <View style={styles.headerSection}>
    <Text>This is my Header Text</Text>
  </View>
  <View style={styles.mainSection}></View>
  <View style={styles.footerSection}>
    <Button title='Press Me'></Button>
    <Button title='Or Try Me'></Button>
  </View>
</View>
```
And the modified style:
```
  },
  headerSection: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainSection: {
    flex: 4,
    backgroundColor: 'grey'
  },
  footerSection: {
    flex: 1,
    backgroundColor: 'lightyellow',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
```
The result is not necessarily pretty but shows how to create a layout with only a handful of style attributes (flex, flexDirection, justifyContent, and alignItems)

Finally, for the main section, I experimented with a layout to handle a random number of children.  For example, a picture gallery application should be able to display 0 to many pictures.  The layout can adjust to fit new pictures or children and shrink to size when pictures or children are removed. For this, I learned more about the `alignContent` and `flexWrap` attributes.
