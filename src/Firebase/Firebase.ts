import firebase from 'gatsby-plugin-firebase';
import 'firebase/firestore';

const db = firebase.firestore();

type WaitlistData = {
  name: string;
  email: string;
  phone: string;
  partyHost?: boolean;
  partyAttendee?: boolean;
  influencer?: boolean;
  createdAt?: number;
};

const waitlistCollection = db.collection(
  'waitlist',
) as firebase.firestore.CollectionReference<WaitlistData>;

export { db, waitlistCollection };
