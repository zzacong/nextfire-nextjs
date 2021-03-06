import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// const __PROD = process.env.NODE_ENV === 'production'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'nextfire-53713.firebaseapp.com',
  projectId: 'nextfire-53713',
  storageBucket: 'nextfire-53713.appspot.com',
  messagingSenderId: '170157559414',
  appId: '1:170157559414:web:d99749bb835128751c9957',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED
const increment = firebase.firestore.FieldValue.increment

// if (!__PROD) {
//   firestore.useEmulator('localhost', 8080)
//   auth.useEmulator('http://localhost:9099')
// }

export {
  firestore,
  auth,
  storage,
  googleAuthProvider,
  STATE_CHANGED,
  increment,
}
