import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default function TinCuaBan({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tin của Bạn</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>DANG XUAT</Text>
      </TouchableOpacity>
    </View>
  );
}
