import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import data from "bootstrap/js/src/dom/data";

const firebaseConfig = {
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(firebaseApp);

console.log("initialized firebase connection");

export const personConverter = {
    toFirestore: function (dataInApp){
        return{
            name: dataInApp.name,
            status: dataInApp.status,
        }
    },
    fromFirestore: function (snapshot, options){
        const data = snapshot.data(options);
        return{...data, id: snapshot.id, ref: snapshot.ref}
    }
};