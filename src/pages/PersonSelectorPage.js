import {Persons} from "../components/Persons";
import {Col, Container, Row} from "react-bootstrap";
import {usePersonsContext} from "../contexts/PersonsContext";

export function PersonSelectorPage(props){
    const {p, setp} = props;
    const drivers = RolesFromDb("DRIVER");
    const dispatchers = RolesFromDb("DISPATCH");
    const admins = RolesFromDb("ADMIN");

    return(
        <div className="Container m-3 p-4 bg-secondary bg-opacity-50 rounded-5" >
            <Col className="">
                <Row>
                    <h1 className="text-center d-inline m-3">klik op jou profiel</h1>
                </Row>
                <Row className="mx-3 ">
                    <h2 className="text-center d-inline m-3">admin</h2>
                    <Persons persons={admins} p={p} setp={setp}/>
                </Row>
                <Row className="mx-3">
                    <h2 className="text-center d-inline m-3">dispatch</h2>
                    <Persons persons={dispatchers} p={p} setp={setp}/>
                </Row>
                <Row className="mx-3">
                    <h2 className="text-center d-inline m-3">driver</h2>
                    <Persons persons={drivers} p={p} setp={setp}/>
                </Row>
            </Col>
        </div>
    )
}

function RolesFromDb(role){
    const {persons} = usePersonsContext();
    return persons?.filter(per => per.role === role);
}
