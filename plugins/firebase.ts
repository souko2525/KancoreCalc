import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCBc-1aDjSytf0GrT5Zo1rHnou8aaEJ7Dw',
    authDomain: 'nuxt-kancore.firebaseapp.com',
    databaseURL: 'https://nuxt-kancore.firebaseio.com',
    projectId: 'nuxt-kancore',
    storageBucket: '',
    messagingSenderId: '824007305584',
    appId: '1:824007305584:web:e96151fc2b770e02',
  });
}

export default firebase;
