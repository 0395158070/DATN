import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function GocNhin({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.headerContainer}>
          <View style={styles.infoHeader}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.iconList}
                source={require('../Images/iconList.png')}
              />
            </TouchableOpacity>
            <View>
              <Image
                style={styles.logohome}
                source={require('../Images/logoHome.png')}
              />
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={styles.iconTimKiem}
                  source={require('../Images/iconSearch.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* body */}
        <View style={styles.bodyContainer}>
          {/* Ảnh 1 */}
          <TouchableOpacity>
            <View style={{backgroundColor: 'yellow', height: 200}}>
              <Image
                style={styles.pictures}
                source={require('../Images/pic1.jpg')}
              />
            </View>
            <View>
              <Text style={styles.titleContent}>
                Người dân tấp nập đến đền hùng
              </Text>
              <Text style={styles.infoTitle}>
                Cả nghìn người dân đổ về Khu di tích lịch sử Đền Hùng để dự lễ
                giỗ Tổ, Từ 4h ngày 21/4 (Tức ngày 10/3 âm lịch).
              </Text>
            </View>
          </TouchableOpacity>
          {/* ảnh 2 */}
          <TouchableOpacity>
            <View style={{backgroundColor: 'yellow', height: 200}}>
              <Image
                style={styles.pictures}
                source={require('../Images/pic2.jpg')}
              />
            </View>
            <View>
              <Text style={styles.titleContent}>
                Danh lam thắng cảnh Việt Nam
              </Text>
              <Text style={styles.infoTitle}>
                Cả nghìn người dân đổ về Khu di tích lịch sử Đền Hùng để dự lễ
                giỗ Tổ, Từ 4h ngày 21/4 (Tức ngày 10/3 âm lịch).
              </Text>
            </View>
          </TouchableOpacity>
          {/* Ảnh 3 */}
          <TouchableOpacity>
            <View style={{backgroundColor: 'yellow', height: 200}}>
              <Image
                style={styles.pictures}
                source={require('../Images/pic3.jpg')}
              />
            </View>
            <View>
              <Text style={styles.titleContent}>
                Vịnh Hạ Long kì vĩ và đẹp đẽ
              </Text>
              <Text style={styles.infoTitle}>
                Cả nghìn người dân đổ về Khu di tích lịch sử Đền Hùng để dự lễ
                giỗ Tổ, Từ 4h ngày 21/4 (Tức ngày 10/3 âm lịch).
              </Text>
            </View>
          </TouchableOpacity>
          {/* Ảnh 4 */}
          <TouchableOpacity>
            <View style={{backgroundColor: 'yellow', height: 200}}>
              <Image
                style={styles.pictures}
                source={require('../Images/pic4.jpg')}
              />
            </View>
            <View>
              <Text style={styles.titleContent}>
                Cầu Rồng - Biểu tượng Đà Nẵng
              </Text>
              <Text style={styles.infoTitle}>
                Cả nghìn người dân đổ về Khu di tích lịch sử Đền Hùng để dự lễ
                giỗ Tổ, Từ 4h ngày 21/4 (Tức ngày 10/3 âm lịch).
              </Text>
            </View>
          </TouchableOpacity>
          {/* Ảnh 5 */}
          <TouchableOpacity>
            <View style={{backgroundColor: 'yellow', height: 200}}>
              <Image
                style={styles.pictures}
                source={require('../Images/pic5.jpg')}
              />
            </View>
            <View>
              <Text style={styles.titleContent}>
                Cơ hội du lịch cho Vịnh Hạ Long
              </Text>
              <Text style={styles.infoTitle}>
                Cả nghìn người dân đổ về Khu di tích lịch sử Đền Hùng để dự lễ
                giỗ Tổ, Từ 4h ngày 21/4 (Tức ngày 10/3 âm lịch).
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
