import {useState} from "react";
import {collection, deleteDoc, query} from "firebase/firestore";
import {firestoreDB, personConverter} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Form} from "react-bootstrap";
import {Persons, Workers} from "../components/Persons";

export function ViewProfilesPage(){
    const [search, setSearch] = useState("");
    const collectionRef = collection(firestoreDB, 'person').withConverter(personConverter);
    const queryRef = query(collectionRef);
    const [values, loading, error] = useCollectionData(queryRef);

    async function deletePerson(person) {
        try {
            await deleteDoc(person.ref);
            console.log(`delete person ${person.name} done`)
        } catch {
            console.log(`ERROR delete person ${person.name} NOT done`)
        }
    }

    return (
        <div className="mx-3">
            <Form>
                <Form.Label>search</Form.Label>
                <Form.Control
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
            </Form>
            <Workers persons={values?.filter(p => p.name.includes(search))}
                     onDeletePerson={deletePerson}
            />
        </div>
    )
}