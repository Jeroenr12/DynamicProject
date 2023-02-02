import {collection, query, where} from "firebase/firestore";
import {driveConverter, firestoreDB, personConverter} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Section} from "../components/Section";
import {Col} from "react-bootstrap";
import {MyCard} from "../components/MyCard";
import {forEach} from "react-bootstrap/ElementChildren";
import {waitFor} from "@testing-library/react";

function Drive(props){
    const {drive} = props;
    return(
        <MyCard classname="border-1 border-dark m-3">
            <h3>{drive.ref}</h3>
            <div>{drive.pickup}</div>
            <div>{drive.dropoff}</div>
            <div>{drive.active}</div>
        </MyCard>
    );

}

export function DrivesPage(props){
    const {p, d, setd} = props
    const collectionRef = collection(firestoreDB, 'drive').withConverter(driveConverter);
    const queryRef = query(collectionRef);
    const [values, loading, error] = useCollectionData(queryRef);
    console.log(values);
    console.log(p.ref.id);
    if(loading){
        return(
            <div>wait</div>
        );
    }
    console.log(values[1].driverid.id);
    const drivelist = [];

    return(
        <Section>
            {values?.find(dri => dri.driverid && dri.driverid.id === p.ref.id).map(dri =>
                <Col md={3}>
                    <Drive key={d.id}
                                   drive={dri}/>
                </Col>
            )}
        </Section>
    );
}