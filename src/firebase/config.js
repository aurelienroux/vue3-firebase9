import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3t2LNvMmFbTSWTHuuA_3yuMmzePZ-Fik",
  authDomain: "fb9-reading-list---ninja.firebaseapp.com",
  projectId: "fb9-reading-list---ninja",
  storageBucket: "fb9-reading-list---ninja.appspot.com",
  messagingSenderId: "291823074301",
  appId: "1:291823074301:web:19130c187d53c2e87b3794"
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

export { db }
