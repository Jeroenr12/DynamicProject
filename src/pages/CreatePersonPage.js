import {addDoc, collection, deleteDoc, orderBy, query, updateDoc} from 'firebase/firestore';
import {useState} from "react";

export function CreatePersonPage(){
    const [personToAdd, setPersonToAdd] = useState({name: null, status: "NOT ACTIVE"});
    async function addPerson(props) {
        const {newPerson} = props;
        try {
            await addDoc(collectionRef, newPerson);
            console.log("add dummy person done")
        } catch {
            console.log("ERROR add dummy person NOT done")
        }
    }
}