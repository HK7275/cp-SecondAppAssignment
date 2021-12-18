import * as React from 'react';
import { Button, View, Text , SafeAreaView, StyleSheet} from 'react-native';
import { auth } from '../firebase';

export default function HomeScreen({ navigation }) {


    // Log Out Function Start

    const logOut = () => {
        auth.signOut();
        navigation.navigate("Login")
    }

    // Log Out Function End

  return (
    <SafeAreaView style={styles.wrapper}>
        <View style={[styles.boxStyles2, styles.box3]}>
        <Text style={styles.textstyle}>
          Welcome!!!
        </Text>
      </View>
      <View style={[styles.boxStyles, styles.box1]}>
        <Button
          onPress={() => navigation.navigate('Movies')}
          title="Go to movies"
        />
      </View>
      <View style={[styles.boxStyles, styles.box2]}>
        <Button
          onPress={() => navigation.navigate('Weather Converter')}
          title="Weather Converter"
        />
      </View>
      <View style={[styles.boxStyles, styles.box1]}>
        <Button
          onPress={() => navigation.navigate('My Movie Details')}
          title="My Movie Details"
        />
      </View>
      <View style={[styles.boxStyles, styles.box2]}>
      <Button
        onPress={() => navigation.navigate('Rohanlayout')}
        title="Rohan Layout"
      />
      </View>
      <View style={[styles.boxStyles, styles.box1]}>
        <Button
          onPress={() => navigation.navigate('Image Gallery')}
          title="Image Gallery"
        />
      </View>
      <View style={[styles.boxStyles, styles.box2]}>
        <Button
          onPress={logOut}
          title="Log Out"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },

  boxStyles: {
    width: '25%',
    padding: '2%' 
  },

  boxStyles2: {
    width: '25%',
    padding: '2%' 
  },

  box1: {
    flex: 0.15,
    alignSelf: 'center',
    backgroundColor: '#99D98C',
  },
  box2: {
    flex: 0.15,
    alignSelf: 'center',
    backgroundColor: '#52B69A'
  },
  box3: {
    flex: 0.15,
    alignSelf: 'center',
    backgroundColor: '#386641'
  },

  textstyle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
  },

  defaultContainer: {
    backgroundColor: '#21a0a0',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
});
