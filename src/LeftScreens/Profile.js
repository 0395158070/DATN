import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Profile({navigation}) {
  return (
    <View>
      <Text>Phan Quốc Khánh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  iconList: {
    height: 25,
    width: 27,
    marginLeft: 3,
  },
  logohome: {
    height: 30,
    width: 250,
  },
  iconTimKiem: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },

  headerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoHeader: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bodyContainer: {
    flex: 10,
    // backgroundColor: 'blue',
  },
  pictures: {
    width: '100%',
    height: '100%',
  },
  titleContent: {
    fontSize: 25,
    color: 'red',
    margin: 5,
    paddingLeft: 5,
  },
  infoTitle: {
    marginLeft: 10,
    fontSize: 14,
    marginRight: 5,
    paddingBottom: 5,
  },
});
