import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC56unDfUJxNv3tbyG_W0NjG6T_r-Y6OVs',
  authDomain: 'blog-7ccc9.firebaseapp.com',
  projectId: 'blog-7ccc9',
  storageBucket: 'blog-7ccc9.appspot.com',
  messagingSenderId: '153627943904',
  appId: '1:153627943904:web:59413930a99c8502250185',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
