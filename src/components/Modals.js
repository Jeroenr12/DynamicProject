import {ChangeDriveStatus, ChangeStatus} from "../utilities/DataUtils";
import {Button, Form, ModalTitle} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import {useState} from "react";
import {useDrivesContext} from "../contexts/DrivesContext";
import {usePersonsContext} from "../contexts/PersonsContext";

function LoadClick(p, setp, setShow){
    ChangeStatus(p, setp, "LOADING");
    setShow(true);
    return true;
}

function LoadClose(p, setp, d, setd, setShow, cmr){
    ChangeStatus(p, setp, "DRIVING");
    ChangeDriveStatus(d, setd, true, false, cmr);
    setShow(false);
    return true;
}

export function LoadingModal(props){
    const {p, setp, d, setd} = props;
    const {onEditPerson} = usePersonsContext();
    const {onEditDrive} = useDrivesContext();
    const [show, setShow] = useState(false);
    const [cmr, setCmr] = useState();
    const handleChange = (e) => setCmr(e.target.value);

    if(d == null || d.pickedup){
        return(
            <>
                <Button disabled>LOAD</Button>
            </>
        );
    }

    return(
        <>
            <Button onClick={() => {onEditPerson(p, {status: "LOADING"}); LoadClick(p, setp, setShow);}}>LOAD</Button>
            <Modal  backdrop="static" fullscreen='true' show={show} onHide={() => LoadClose(p, setp, d, setd, setShow, cmr)}>
                <Modal.Header>
                    <ModalTitle>Loading...</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <h1>Always load safely and secure your loads!</h1>
                    <Form>
                        <Form.Group >
                            <Form.Label>CMR nummer: </Form.Label>
                            <Form.Control type="text" onChange={handleChange} value={cmr}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        onEditDrive(d, {cmr: cmr, pickedup: true});
                        onEditPerson(p, {status: "DRIVING"});
                        LoadClose(p, setp, d, setd, setShow, cmr);
                    }}>
                        Click after finishing loading
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


function UnloadClick(p, setp, setShow){
    ChangeStatus(p, setp, "UNLOADING");
    setShow(true);
    return true;
}

function UnloadClose(p, setp, d, setd, setShow){
    ChangeStatus(p, setp, "ACTIVE");
    ChangeDriveStatus(d, setd, false, true);
    setShow(false);
    return true;
}

export function UnloadingModal(props){
    const {p, setp, d, setd} = props;
    const {onEditPerson} = usePersonsContext();
    const {onEditDrive} = useDrivesContext();
    const [show, setShow] = useState(false);

    if(d == null || !d.pickedup){
        return(
            <>
                <Button disabled>UNLOAD</Button>
            </>
        );
    }

    return(
        <>
            <Button onClick={() => {onEditPerson(p, {status: "UNLOADING"}); UnloadClick(p, setp, setShow);} }>UNLOAD</Button>
            <Modal  backdrop="static" fullscreen='true' show={show} onHide={() => UnloadClose(p, setp, d, setd, setShow)}>
                <Modal.Header>
                    <ModalTitle>Unloading...</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <h1>Always unload safely!</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        onEditDrive(d, {droppedoff: true, active: false});
                        onEditPerson(p, {status: "ACTIVE"});
                        UnloadClose(p, setp, d, setd, setShow);
                    }}>
                        Click after finishing fully unloading
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export function CreatePersonModal(){
    const {onNewPerson} = usePersonsContext();
    const [personToAdd, setPersonToAdd] = useState({name: null, role: null});
    const [show, setShow] = useState(false);
    return(
        <>
            <Button className="" onClick={() => setShow(true)}>Create employee</Button>
            <Modal backdrop="static" fullscreen='true' show={show}>
                <Modal.Header><ModalTitle>Create new employee</ModalTitle></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label className="mt-2 ms-1">name:</Form.Label>
                        <Form.Control
                            value={personToAdd.name}
                            onChange={e => setPersonToAdd({...personToAdd, name: e.target.value})}/>
                        <Form.Label className="mt-2 ms-1">role:</Form.Label>
                        <Form.Select
                            onChange={e => (e.target.value === "DRIVER") ? setPersonToAdd({...personToAdd, role: e.target.value, status: "NOT ACTIVE"}) : setPersonToAdd({...personToAdd, role: e.target.value}) }>
                            <option>Select Role</option>
                            <option value={"DRIVER"}>Driver</option>
                            <option value={"DISPATCHER"}>Dispatcher</option>
                            <option value={"ADMIN"}>Admin</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="m-1" size="lg" onClick={() => {onNewPerson(personToAdd); setShow(false);}}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}