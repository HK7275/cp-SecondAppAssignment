import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const Rohanlayout = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.boxStyles, styles.box1]}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.50a42f23d5eec2ac2ac68c11e4ca9218?rik=cQyfUMU1NvBE3Q&riu=http%3a%2f%2fwww.geeksofdoom.com%2fGoD%2fimg%2f2016%2f07%2fspider-man-homecoming-title-card.jpg&ehk=4shb2pmePoo6gRX9ir4zTPL7s7D6ZVVxkKcLuJ0WDQo%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={styles.defaultContainer}
        />
      </View>
      <View style={[styles.boxStyles, styles.box2]}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.9ca62ad2998041e2e8c045c3ca088660?rik=bfUNypRBJtEAyA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f03%2fspider-man-homecoming-poster-2.jpeg&ehk=DpAU5uiz9sUTKyUpbDFEpepMMteRePtpl1kCjfMeNQU%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={styles.defaultContainer}
        />
      </View>
      <View style={[styles.boxStyles, styles.box3]}>
        <View style={styles.defaultContainer}>
          <Button
            onPress={() => navigation.navigate('Movies')}
            title="Book Tickets Now"
            color="#FFFFFF"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },

  boxStyles: {
    width: '100%',
    height: 50,
    padding: 20,
  },

  box1: {
    flex: 1,
  },
  box2: {
    flex: 3,
  },
  box3: {
    flex: 0.4,
  },

  defaultContainer: {
    backgroundColor: '#21a0a0',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default Rohanlayout;