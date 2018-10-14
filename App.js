import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import RootNavigation from './src/navigation/RootNavigation';


export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBIm1RCK6gQ-dZJ32XxHKQagY2Lj0ugbJ4',
      authDomain: 'zeban-1537641222993.firebaseapp.com',
      databaseURL: 'https://zeban-1537641222993.firebaseio.com',
      projectId: 'zeban-1537641222993',
      storageBucket: 'zeban-1537641222993.appspot.com',
      messagingSenderId: '187517006613'
    });
  }


  render() {
    return (
      <RootNavigation />
    );
  }
}
