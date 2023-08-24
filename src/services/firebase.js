import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

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
            role: dataInApp.role,
            status: dataInApp.status,
        }
    },
    fromFirestore: function (snapshot, options){
        const data = snapshot.data(options);
        return{...data, id: snapshot.id, ref: snapshot.ref}
    }
};

export const driveConverter = {
    toFirestore: function (dataInApp){
        return{
           driverid: dataInApp.driverid,
           dropoff:  dataInApp.dropoff,
            pickup: dataInApp.pickup,
            pickedup:   dataInApp.pickedup,
            droppedoff: dataInApp.droppedoff,
            active: dataInApp.active,
            cmr: dataInApp.cmr
        }
    },
    fromFirestore: function (snapshot, options){
        const data = snapshot.data(options);
        return{...data, id: snapshot.id, ref: snapshot.ref}
    }
};