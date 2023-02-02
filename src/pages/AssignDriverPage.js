import {collection, query, where} from "firebase/firestore";
import {firestoreDB, personConverter} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {ActiveDrivers} from "../components/Persons";


export function AssignDriverPage(props){
    const {d, setd} = props;
    const collectionRef = collection(firestoreDB, 'person').withConverter(personConverter);
    const queryRef = query(collectionRef, where("role","==","DRIVER"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log(values);
    return(
        <>
            <ActiveDrivers d={d} setd={setd} persons={values}/>
        </>
    )

}