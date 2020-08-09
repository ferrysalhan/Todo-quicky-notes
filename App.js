// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import NoteScreenComponent from './src/NoteScreenComponent';


// export default function App() {
//   return (
//     <View style={styles.container}>
//     <NoteScreenComponent/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NoteScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

console.reportErrorsAsExceptions = false;

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  if(firebase.apps.length === 0){
    // var firebaseConfig = {
    //   apiKey: "AIzaSyBkAskm-vbTlinLz742uDzLA7bAczCMPes",
    //   authDomain: "rn-masterclass-d5.firebaseapp.com",
    //   databaseURL: "https://rn-masterclass-d5.firebaseio.com",
    //   projectId: "rn-masterclass-d5",
    //   storageBucket: "rn-masterclass-d5.appspot.com",
    //   messagingSenderId: "986531550204",
    //   appId: "1:986531550204:web:24c9dfb7410fda01471879"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);

    var firebaseConfig = {
      apiKey: "AIzaSyBlpxW0r9R95I00ji64hqfovV1HT1Fc9gc",
      authDomain: "my-todo-app-fc40e.firebaseapp.com",
      databaseURL: "https://my-todo-app-fc40e.firebaseio.com",
      projectId: "my-todo-app-fc40e",
      storageBucket: "my-todo-app-fc40e.appspot.com",
      messagingSenderId: "466423269784",
      appId: "1:466423269784:web:35d9b9c3e624a9849743ed"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent/>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {/* <NotesScreenComponent/> */}
      <LoginScreenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});