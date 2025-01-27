import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAemuxB3XE1-xchaMIC3bZBNXJdGIdtgcU",
    authDomain: "cs4261-first-programming-e1987.firebaseapp.com",
    databaseURL: "https://cs4261-first-programming-e1987-default-rtdb.firebaseio.com",
    projectId: "cs4261-first-programming-e1987",
    storageBucket: "cs4261-first-programming-e1987.firebasestorage.app",
    messagingSenderId: "1074085558838",
    appId: "1:1074085558838:web:4e913916e7f134c972f697"
};

const app = initializeApp(firebaseConfig);

export default app