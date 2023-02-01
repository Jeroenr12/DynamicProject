import {collection, query, where} from "firebase/firestore";
import {dataConverter, firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import {Container, Row} from "react-bootstrap";
import {useEffect} from "react";

export function PersonSelectorPage(props){
    const {p, setp} = props;
    const drivers = RolesFromDb("DRIVER");
    const dispatchers = RolesFromDb("DISPATCH");
    const admins = RolesFromDb("ADMIN");

    return(
        <Container>
            <h2>dubbelklik op jou profiel</h2>
            <Row className="mx-3">
                <h3>admin</h3>
                <Persons persons={admins} p={p} setp={setp}/>
            </Row>
            <Row className="mx-3">
                <h3>dispatch</h3>
                <Persons persons={dispatchers} p={p} setp={setp}/>
            </Row>
            <Row className="mx-3">
                <h3>driver</h3>
                <Persons persons={drivers} p={p} setp={setp}/>
            </Row>

        </Container>
    )
}

function RolesFromDb(role){
    const collectionRef = collection(firestoreDB, 'person').withConverter(dataConverter);
    const queryRef = query(collectionRef, where("role","==",role));
    const [values, loading, error] = useCollectionData(queryRef);
    return values;
}
