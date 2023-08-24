import {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {usePersonsContext} from "../contexts/PersonsContext";
import {useDrivesContext} from "../contexts/DrivesContext";


export function CreateDrivePage(){
    const {persons} = usePersonsContext();
    const {onNewDrive} = useDrivesContext();
    const [driveToAdd, setdriveToAdd] = useState({driverid: null, pickup: null, dropoff: null, pickedup: false, droppedoff: false, active: false, cmr: null});

    return (
        <div className="w-100 m-3 mt-0">
            <Col className="d-flex justify-content-center">
                    <Form >
                        <Row>
                            <Form.Label className="fw-bold fs-5 mt-2 ms-1">Pickup:</Form.Label>
                            <Form.Control
                                className="w-auto"
                                value={driveToAdd.pickup}
                                onChange={e => setdriveToAdd({...driveToAdd, pickup: e.target.value})} placeholder="Type pickup location..."/>
                        </Row>
                        <Row>
                            <Form.Label className="fw-bold fs-5 mt-2 ms-1">Dropoff:</Form.Label>
                            <Form.Control
                                className="w-auto"
                                value={driveToAdd.dropoff}
                                onChange={e => setdriveToAdd({...driveToAdd, dropoff: e.target.value})} placeholder="Type dropoff location..."/>
                        </Row>
                        <Row>
                            <Form.Label className="fw-bold fs-5 mt-2 ms-1">Driver</Form.Label>
                            <Form.Select className="w-auto" onChange={e => setdriveToAdd({...driveToAdd, driverid: e.target.value})}>
                                <option>Select driver</option>
                                {persons?.filter(per => per.role === "DRIVER").map(per => <option value={per.ref.id}>{per.name}</option>)}
                            </Form.Select>
                        </Row>
                    </Form>

            </Col>
            <div className="d-flex justify-content-center p-2">
                <Button className="m-1" size="lg" onClick={() => onNewDrive(driveToAdd)}>create new drive</Button>
            </div>


        </div>
    )
}