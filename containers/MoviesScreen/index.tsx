import * as React from 'react';
import { Button, View } from 'react-native';
import List from './components/List';

export default function MoviesScreen({ navigation }) {
    // return (
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Button onPress={() => navigation.goBack()} title="Go back home" />
    //   </View>
    // );

    return (
      <View style={{ flex: 1 }}>
        <List />
      </View>
    );
  }