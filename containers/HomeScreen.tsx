import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { auth } from '../firebase';

export default function HomeScreen({ navigation }) {


    // Log Out Function Start

    const logOut = () => {
        auth.signOut();
        navigation.navigate("Login")
    }

    // Log Out Function End

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is the Welcome Screen!</Text>
      <Button
        onPress={() => navigation.navigate('Movies')}
        title="Go to movies"
      />
      <Button
        onPress={() => navigation.navigate('Weather Converter')}
        title="Weather Converter"
      />
      <Button
        onPress={() => navigation.navigate('My Movie Details')}
        title="My Movie Details"
      />
      <Button
        onPress={() => navigation.navigate('Image Gallery')}
        title="Image Gallery"
      />
      <Button
        onPress={logOut}
        title="Log Out"
      />
    </View>
  );
}