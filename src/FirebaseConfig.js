import {firebase} from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDGjyG7Jc-nGkNk4jfeT9-SqkhgW5VNxz0',
  authDomain: 'apptintuc-c8e6d.firebaseapp.com',
  projectId: 'apptintuc-c8e6d',
  storageBucket: 'apptintuc-c8e6d.appspot.com',
  messagingSenderId: '28577655839',
  appId: '1:28577655839:web:d3af5a7ec4f267700ef92a',
  measurementId: 'G-VJWRZ0FTF5',
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
