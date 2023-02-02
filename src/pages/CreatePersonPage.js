import {addDoc, collection, deleteDoc, orderBy, query, updateDoc} from 'firebase/firestore';
import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {firestoreDB, personConverter} from "../services/firebase";

export function CreatePersonPage(){
    const collectionRef = collection(firestoreDB, 'person').withConverter(personConverter);
    const [personToAdd, setPersonToAdd] = useState({name: null, status: "NOT ACTIVE", role: null});

    const Addperson = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(firestoreDB, "person"), {
                name: personToAdd.name,
                role: personToAdd.role,
                status: personToAdd.status,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
            <div className="m-3 mt-0">
                <Form>
                    <Form.Label className="mt-2 ms-1">name:</Form.Label>
                    <Form.Control
                        value={personToAdd.name}
                        onChange={e => setPersonToAdd({...personToAdd, name: e.target.value})}/>
                    <Form.Label className="mt-2 ms-1">role:</Form.Label>
                    <Form.Control
                        value={personToAdd.role}
                        onChange={e => setPersonToAdd({...personToAdd, role: e.target.value})}/>
                </Form>
                <div className="d-flex justify-content-center p-2">
                    <Button className="m-1" size="lg" onClick={Addperson}>create new user</Button>
                </div>
            </div>
    );
}