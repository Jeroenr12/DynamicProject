import {addDoc, collection} from 'firebase/firestore';
import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {driveConverter, firestoreDB} from "../services/firebase";

export function CreateDrivePage(props){

    const {d, setd} = props;

    const collectionRef = collection(firestoreDB, 'drive').withConverter(driveConverter);
    const [driveToAdd, setdriveToAdd] = useState({ref: null, driverid: null, pickup: null, dropoff: null, pickedup: false, droppedoff: false, active: false});

    const AddDrive = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(firestoreDB, "drive"), {
                driverid: driveToAdd.driverid,
                dropoff:  driveToAdd.dropoff,
                pickup: driveToAdd.pickup,
                pickedup:   driveToAdd.pickedup,
                droppedoff: driveToAdd.droppedoff,
                active: driveToAdd.active,
            });
            console.log(docRef.id);
            setd(docRef);


        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className="m-3 mt-0">
            <Form>
                <Form.Label className="mt-2 ms-1">pickup:</Form.Label>
                <Form.Control
                    value={driveToAdd.pickup}
                    onChange={e => setdriveToAdd({...driveToAdd, pickup: e.target.value})}/>
                <Form.Label className="mt-2 ms-1">dropoff:</Form.Label>
                <Form.Control
                    value={driveToAdd.dropoff}
                    onChange={e => setdriveToAdd({...driveToAdd, dropoff: e.target.value})}/>
            </Form>
            <div className="d-flex justify-content-center p-2">
                <Button className="m-1" size="lg" onClick={AddDrive}>create new user</Button>
            </div>
        </div>
    );
}