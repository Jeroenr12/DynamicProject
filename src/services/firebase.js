import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(firebaseApp);

console.log("initialized firebase connection");

export const dataConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options){
        const data = snapshot.data(options);
        return{...data, id: snapshot.id}
    }
};