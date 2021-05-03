import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';

import HomeNavigate from './HomeNavigate';
import GiaiTri from '../LeftScreens/GiaiTri';
import GocNhin from '../LeftScreens/GocNhin';
import KinhDoanh from '../LeftScreens/KinhDoanh';
import MoiNhat from '../LeftScreens/MoiNhat';
import TheGioi from '../LeftScreens/TheGioi';
import TheThao from '../LeftScreens/TheThao';
import ThoiSu from '../LeftScreens/ThoiSu';
import Videos from '../LeftScreens/Videos';
import Profile from '../LeftScreens/Profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigate() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="side"
        component={Profile}
        options={{
          drawerLabel: () => (
            <View style={{height: 120, right: -10, alignItems: 'center'}}>
              <Image
                style={{height: 60, width: 60, borderRadius: 120}}
                source={require('../Images/picProfile.jpg')}
              />
              <Text style={styles.textIcon1}>Phan Quốc Khánh</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textIcon}>Follow: 100</Text>
                <Text style={styles.textIcon}>Follow: 100</Text>
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Trang Chủ"
        component={HomeNavigate}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconHome.png')}
              />
              <Text style={styles.textIcon}>Trang chủ</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Mới Nhất"
        component={MoiNhat}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconMoiNhat.png')}
              />
              <Text style={styles.textIcon}>Mới Nhất</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Thời Sự"
        component={ThoiSu}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconThoiSu.jpg')}
              />
              <Text style={styles.textIcon}>Thời Sự</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Góc Nhìn"
        component={GocNhin}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconGocNhin.jpg')}
              />
              <Text style={styles.textIcon}>Góc Nhìn</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Thế Giới"
        component={TheGioi}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconTheGioi.png')}
              />
              <Text style={styles.textIcon}>Thế Giới</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Thể Thao"
        component={TheThao}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconTheThao.png')}
              />
              <Text style={styles.textIcon}>Thể Thao</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Kinh Doanh"
        component={KinhDoanh}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconKinhDoanh.png')}
              />
              <Text style={styles.textIcon}>Kinh Doanh</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Giải Trí"
        component={GiaiTri}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconGiaiTri.png')}
              />
              <Text style={styles.textIcon}>Giải Trí</Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Videos"
        component={Videos}
        options={{
          drawerLabel: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={require('../Images/iconVideos.png')}
              />
              <Text style={styles.textIcon}>Videos</Text>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  textIcon: {
    fontSize: 14,
    color: '#333333',
    marginTop: 5,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  textIcon1: {
    fontSize: 20,
    color: '#333333',
    marginTop: 5,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});
