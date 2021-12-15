
import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet ,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'darkgray'
  },
  tinyLogo: {
    width: 300,
    height: 400,  
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  detailsTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#873e23'
  },
  detailsText: {
    fontSize: 16,
    backgroundColor: '#eab676'
  },
  lineStyle:{
    borderWidth: 5,
    borderColor:'black',
    borderRadius: 5,
    margin: 5,
  }
});

class DisplayAnImage extends Component {

    
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{uri: 'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg'}}
          />
          <Text style={styles.textTitle}>
          The Matrix Reloaded (2003) 
          </Text>
          <View style = {styles.lineStyle} />
          <Text style={styles.detailsTitle}>
          Release date: 
          </Text>
          <Text style={styles.detailsText}>
          May 16, 2003  
          </Text>
          <View style = {styles.lineStyle} />
          <Text style={styles.detailsTitle}>
          Directors: 
          </Text>
          <Text style={styles.detailsText}>
          Lana Wachowski, Lilly Wachowski
          </Text>
          <View style = {styles.lineStyle} />
          <Text style={styles.detailsTitle}>
          Music by: 
          </Text>
          <Text style={styles.detailsText}>
          Don Davis
          </Text>
          <View style = {styles.lineStyle} />
          <Text style={styles.detailsTitle}>
          Box office:
          </Text>
          <Text style={styles.detailsText}>
          $739.4 million
          </Text>
          <View style = {styles.lineStyle} />
          <Text style={styles.detailsTitle}>
          Cast:
          </Text>
          <Text style={styles.detailsText}>Keanu Reeves</Text>
          <Text style={styles.detailsText}>Laurence Fishburne</Text>
          <Text style={styles.detailsText}>Carrie-Anne Moss</Text>
          <Text style={styles.detailsText}>Hugo Weaving</Text>
          <Text style={styles.detailsText}>Jada Pinkett Smith</Text>
          <Text style={styles.detailsText}>Gloria Foster</Text>
          <View style = {styles.lineStyle} />
          <Text style={styles.detailsTitle}>
          Discreption: 
          </Text>
          <Text style={styles.detailsText}>
          At the Oracle's behest, Neo attempts to rescue the Keymaker and realises that to save Zion within 72 hours, he must confront the Architect. Meanwhile, Zion prepares for war against the machines.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
export default DisplayAnImage;