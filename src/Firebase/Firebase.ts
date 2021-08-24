import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCE4ATdzq6p3aK1wIQ6u0Yr_vZvaCFZUmY',
  authDomain: 'flare-social.firebaseapp.com',
  projectId: 'flare-social',
  storageBucket: 'flare-social.appspot.com',
  messagingSenderId: '889204980004',
  appId: '1:889204980004:web:0f69ea27a1f6709d84dbb1',
  measurementId: 'G-LHCS3RKPVQ',
};

let firebaseInstance: firebase.app.App | undefined = undefined;

if (!firebaseInstance)
  firebaseInstance = firebase.initializeApp(firebaseConfig);

const db = firebaseInstance.firestore();

const waitlistCollection = db.collection('waitlist');

export { db, waitlistCollection };
