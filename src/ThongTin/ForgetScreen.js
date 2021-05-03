import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.infoHeader}>
          <Image
            style={styles.tinyLogo}
            source={require('../Images/logoApp.png')}
          />
          <Text style={styles.textLogo}>Tin Nhanh VietNamExpress</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.infoContainer}>
          <Text>Số Điện Thoại: </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập Số điện thoại đăng ký"
            placeholderTextColor="#333333"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            // onChangeText={setuserName}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert('QUÊN MẬT KHẨU');
            }}>
            <Text style={styles.textInput}>QUÊN MẬT KHẨU</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.infoFooter}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Login')}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textButton}>QUAY LẠI</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  headerContainer: {
    flex: 2,
    backgroundColor: 'blue',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
  },
  infoHeader: {
    alignItems: 'center',
    alignContent: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  textLogo: {
    fontSize: 20,
    color: 'white',
  },

  bodyContainer: {
    flex: 2.8,
  },
  infoContainer: {
    marginLeft: 60,
    marginRight: 60,
    paddingTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 10,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#b3c6ff',
    color: '#FFF',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 20,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'blue',
  },

  footerContainer: {
    flex: 0.4,
    // backgroundColor: 'yellow',
  },
  infoFooter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 15,
    color: 'blue',
  },
});
