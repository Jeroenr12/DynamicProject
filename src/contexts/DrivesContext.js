import {createContext, useCallback, useContext, useMemo} from "react";
import {useMessageContext} from "./messageContext";
import {addDoc, collection, deleteDoc, query, updateDoc} from "firebase/firestore";
import {driveConverter, firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";


const  DrivesContext = createContext();

export function DrivesProvider(props){
    const {setMessage} = useMessageContext();

    const collectionRef = useMemo(() =>
    collection(firestoreDB, 'drive').withConverter(driveConverter), []);
    const queryRef = useMemo(() =>
    query(collectionRef), [collectionRef]);

    const [drives, loading, error] = useCollectionData(queryRef);

    const onNewDrive = useCallback(async (drive) => {
        if(drive.driverid === null){
            setMessage("You didn't enter a driver");
            return false
        }
        try {
            await addDoc(collectionRef, drive);
            setMessage("drive added to database");
            return true;
        }catch {
            setMessage("something went wrong with adding drive to database");
        }
        return false;
    }, [collectionRef, setMessage]
    );

    const onDeleteDrive = useCallback(async (drive) => {
            try {
                await deleteDoc(drive.ref);
                setMessage("drive is deleted");
            } catch {
                setMessage("something went wrong with deleting drive from database");
            }
        }, [setMessage]
    );

    const onEditDrive = useCallback(async (drive, change) => {
       try{
           await updateDoc(drive.ref, change);
           setMessage("drive edited succesfully");
           return true;
       } catch {
           setMessage("something went wrong updating drive");
       }
       return false;
    }, [setMessage]);

    const api = useMemo(() => ({drives, onNewDrive, onDeleteDrive, onEditDrive
    }), [drives, onNewDrive, onDeleteDrive, onEditDrive]);

    return <DrivesContext.Provider value={api}>
        {props.children}
    </DrivesContext.Provider>
}

export const useDrivesContext = () => useContext(DrivesContext);