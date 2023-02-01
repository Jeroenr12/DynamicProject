import {collection} from 'firebase/firestore';
import {firestoreDB, dataConverter} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";

export function PersonFromDbPage(){
    const collectionRef = collection(firestoreDB, 'person').withConverter(dataConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});
    return(
        <>
            <div>Persons from database</div>
        </>

    )
}

