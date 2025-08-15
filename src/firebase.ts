// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCJMZ58VvxazdnRkrYpfSAUGOomEjncdtU',
	authDomain: 'jfr-2024.firebaseapp.com',
	databaseURL: 'https://jfr-2024-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'jfr-2024',
	storageBucket: 'jfr-2024.firebasestorage.app',
	messagingSenderId: '752406784574',
	appId: '1:752406784574:web:829472b4f421161d14ff6f',
	measurementId: 'G-FSS133Z2XH'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const databaseName = 'mediaHistory';
export const database = getDatabase(firebaseApp);
