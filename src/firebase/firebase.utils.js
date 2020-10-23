import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBv0BP1iuJk4KthlKrU71VGy_2knEqQXmk",
  authDomain: "crwn-db-51f7f.firebaseapp.com",
  databaseURL: "https://crwn-db-51f7f.firebaseio.com",
  projectId: "crwn-db-51f7f",
  storageBucket: "crwn-db-51f7f.appspot.com",
  messagingSenderId: "482520684932",
  appId: "1:482520684932:web:6057e8c6f52bc6b944e5d1",
  measurementId: "G-N86HR9DCN7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log('docRef start');
  console.log(snapShot);
  console.log('docRef end');

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
