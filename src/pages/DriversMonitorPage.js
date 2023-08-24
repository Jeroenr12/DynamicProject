import {usePersonsContext} from "../contexts/PersonsContext";
import {Col, Container, Row} from "react-bootstrap";
import {DriverMonitor} from "../components/Persons";

export function DriversMonitorPage(){
    const {persons} = usePersonsContext();
    return(
        <Container fluid>
            <h3>Active drivers</h3>
            <Row className="w-100">
                        {persons?.filter(per => per.role === "DRIVER" && !per.status.includes("NOT ACTIVE")).map(p =>
                            <DriverMonitor key={p.id} person={p}/>
                        )}
            </Row>
            <h3>Non-active drivers</h3>
            <Row>
                        {persons?.filter(per => per.role === "DRIVER" && per.status.includes("NOT ACTIVE")).map(p =>
                            <DriverMonitor key={p.id} person={p}/>
                        )}
            </Row>

        </Container>
    );
}