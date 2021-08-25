import firebase from 'gatsby-plugin-firebase';
import 'firebase/firestore';

const db = firebase.firestore();

const waitlistCollection = db.collection('waitlist');

export { db, waitlistCollection };
