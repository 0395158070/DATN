import firebase from '../FirebaseConfig';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import 'react-native-gesture-handler';

export default function DangKyScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const signUp = async () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert('Bạn chưa điền thông tin!!');
    }
  };

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
          <Text>TÊN ĐĂNG NHẬP: </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên đăng nhập"
            placeholderTextColor="#333333"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
          <Text>MẬT KHẨU: </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#333333"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
          />
          {/* {error ? <Text style={{color: 'red'}}>{error}</Text> : null} */}

          {/* Xu ly dang ky */}
          <TouchableOpacity style={styles.button} onPress={() => signUp()}>
            <Text style={styles.textInput}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row-reverse', left: 30}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text>QUAY LẠI</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 10,
    marginBottom: 10,
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
});
