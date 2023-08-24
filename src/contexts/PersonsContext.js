import {createContext, useCallback, useContext, useMemo} from "react";
import {useMessageContext} from "./messageContext";
import {addDoc, collection, deleteDoc, query, updateDoc} from "firebase/firestore";
import {firestoreDB, personConverter} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";


const PersonsContext = createContext();

export function PersonsProvider(props){
    const {setMessage} = useMessageContext();

    const collectionRef = useMemo(() =>
        collection(firestoreDB, 'person').withConverter(personConverter), []);
    const queryRef = useMemo(() =>
        query(collectionRef), [collectionRef]);

    const [persons, loading, error] = useCollectionData(queryRef);

    const onNewPerson = useCallback(async (person) => {
            try {
                await addDoc(collectionRef, person);
                setMessage("person added to database");
            }catch {
                setMessage("something went wrong with adding person to database");
            }
        }, [collectionRef, setMessage]
    );

    const onDeletePerson = useCallback(async (person) => {
            try {
                await deleteDoc(person.ref);
                setMessage("person is deleted");
            } catch {
                setMessage("something went wrong with deleting person from database");
            }
        }, [setMessage]
    );

    const onEditPerson = useCallback(async (person, change) => {
        try{
            await updateDoc(person.ref, change);
            setMessage("person edited succesfully");
            return true;
        } catch {
            setMessage("something went wrong updating person");
        }
        return false;
    }, [setMessage]);

    const api = useMemo(() => ({
        persons, onNewPerson, onDeletePerson, onEditPerson
    }), [persons, onNewPerson, onDeletePerson, onEditPerson]);

    return <PersonsContext.Provider value={api}>
        {props.children}
    </PersonsContext.Provider>
}

export const usePersonsContext = () => useContext(PersonsContext);