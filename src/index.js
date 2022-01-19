import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import './index.css';
import App from './App';
import { store } from './redux/store';



// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDFADiLDShkfjABRPp0HztKQ-zXXtfyPsw",
  authDomain: "simpleproject-415aa.firebaseapp.com",
  databaseURL: "https://simpleproject-415aa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "simpleproject-415aa",
  storageBucket: "simpleproject-415aa.appspot.com",
  messagingSenderId: "226590784153",
  appId: "1:226590784153:web:59fd717e5397b79de79608",
  measurementId: "G-RPK02X07JR"
});




ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

