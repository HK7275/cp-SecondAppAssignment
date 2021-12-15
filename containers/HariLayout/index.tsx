import React, { Component } from "react";
import { View , Image, StyleSheet, Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

  let deviceHeight = Dimensions.get('window').height;
  let deviceWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    imageDImention: {
        height: deviceHeight /3,
        width: deviceWidth / 3, 
        margin: 2,
        borderRadius: 10
    }
  });

class DisplayAnImage extends Component {
    render() {
      return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/947/thumb-947529.jpg'}}
                />
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/945/thumb-945673.png'}}
                />
            </View>
            <View style={styles.row}>
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/943/thumb-943211.jpg'}}
                />
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/943/thumb-943196.jpg'}}
                />
            </View>
            <View style={styles.row}>
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/940/thumb-940307.jpg'}}
                />
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/937/thumb-937715.png'}}
                />
            </View>
            <View style={styles.row}>
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/939/thumb-939032.jpg'}}
                />
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/939/thumb-939034.jpg'}}
                />
            </View>
            <View style={styles.row}>
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/937/thumb-937582.png'}}
                />
                <Image
                    style = {styles.imageDImention}
                    source={{uri: 'https://mfiles.alphacoders.com/936/thumb-936687.jpg'}}
                />
            </View>
        </ScrollView>
      );
    }
  }
  export default DisplayAnImage;