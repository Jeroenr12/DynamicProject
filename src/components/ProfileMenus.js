import {Section} from "./Section";
import {Button, Col, Row} from "react-bootstrap";
import {ChangeStatus} from "../utilities/DataUtils";
import {LoadingModal, UnloadingModal} from "./Modals";
import {usePersonsContext} from "../contexts/PersonsContext";




export function DriverMenu(props){
    const {p, setp, d, setd} = props;
    const {onEditPerson} = usePersonsContext();
    if(p.status === "NOT ACTIVE"){
        ChangeStatus(p, setp, "ACTIVE");
    }
    return(
        <div className="Container d-flex justify-content-around">
            <Col className="p-4">
                <Row>
                    <Col className="pb-3">
                        <Button className="fs-3 fw-bold w-100" onClick={() => {onEditPerson(p, {status: "DRIVING"}); ChangeStatus(p, setp, "DRIVING");}}>DRIVING</Button>
                    </Col>
                    <Col className="pb-3">
                        <LoadingModal p={p} setp={setp} d={d} setd={setd}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="pb-3">
                        <UnloadingModal p={p} setp={setp} d={d} setd={setd}/>
                    </Col>
                    <Col className="pb-3">
                        <Button className="fs-3 fw-bold w-100" onClick={() => {onEditPerson(p, {status: "RESTING"}); ChangeStatus(p, setp, "RESTING");}}>RESTING</Button>
                    </Col>

                </Row>
                <Row>
                    <Col className="pb-3">
                        <Button className="fs-3 fw-bold w-100" onClick={() => {onEditPerson(p, {status: "TANKING"}); ChangeStatus(p, setp, "TANKING");}}>TANKING</Button>
                    </Col>
                    <Col className="pb-3">
                        <Button className="fs-3 fw-bold w-100" onClick={() => {onEditPerson(p, {status: "OVERNIGHT"}); ChangeStatus(p, setp, "OVERNIGHT");}}>OVERNIGHT</Button>
                    </Col>
                </Row>
            </Col>


        </div>
    );
}