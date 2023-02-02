import {Section} from "./Section";
import {Button, Col, Form} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {MdDelete} from "react-icons/md";
import PropTypes, {func} from "prop-types";
import {collection, query, updateDoc, where} from "firebase/firestore";
import {firestoreDB, personConverter} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";

function Person(props){
    const {person, p, setp} = props;
    return(
        <a href="#" onClick={() => setp(person)}>
            <MyCard classname="border-1 border-dark">
                <div>{person.name}</div>
                <div>{person.id}</div>
            </MyCard>
        </a>

    );
}

export function Persons(props){
    const {persons, p, setp} = props;
    return(
      <Section>
          {persons?.map(p =>
              <Col md={3}>
                  <Person key={p.id}
                          person={p}
                          p={p} setp={setp}/>
              </Col>
          )}
      </Section>
    );
}

function EditOptionsButton(props) {
    const {onClick, children} = props;
    return (
        <Button variant="outline-primary" size="sm" className="m-1 mb-0"
                onClick={onClick}>
            {children}
        </Button>
    );
}

function Worker(props){
        const {person, onDeletePerson} = props;
        return (
            <Col xs={6} sm={4} md={3} lg={2}>
                <MyCard>
                    <div>{person.name}</div>
                    <div>{person.id}</div>
                    <div>{person.role}</div>
                    <div>{person.status}</div>
                    {(onDeletePerson) &&
                    <div className="border-top mt-1 pt-1">
                        <EditOptionsButton onClick={() => onDeletePerson(person)}><MdDelete/></EditOptionsButton>
                    </div>
                    }
                </MyCard>
            </Col>
        );
}

Worker.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    })
}

export function Workers(props){
    const {persons, onDeletePerson} = props;
    return (
        <Section>
            {persons?.map(p =>
                <Worker key={p.id}
                        person={p}
                        onDeletePerson={onDeletePerson}
                />)}
        </Section>
    );
}

async function AssignDrive(person, d, setd){
    try{
        await updateDoc(d, {driverid: person.ref});
        setd(null);
    } catch (e) {
        console.log(`ERROR Status edit NOT done correctly: ${e}`)
    }
    return true;
}

function ActiveDriver(props){
    const {person, d, setd} = props;
    return(
        <a href="#" onClick={() => AssignDrive(person, d, setd)}>
            <MyCard classname="border-1 border-dark">
                <div>{person.name}</div>
                <div>{person.id}</div>
            </MyCard>
        </a>

    );
}

export function ActiveDrivers(props){
    const {d, setd, persons} = props;
    return(
        <Section>
        {persons?.map(p =>
            <Col md={3}>
                <ActiveDriver key={p.id}
                        person={p}
                        d={d} setd={setd}/>
            </Col>
        )}
        </Section>
    );
}

function DriverMonitor(props){
    const {person} = props;
    return(
        <MyCard classname="border-1 border-dark m-3">
            <div>{person.name}</div>
            <div>{person.id}</div>
            <div>{person.status}</div>
        </MyCard>
    );
}

export function DriversMonitor(){
    const collectionRef = collection(firestoreDB, 'person').withConverter(personConverter);
    const queryRef = query(collectionRef, where("role","==","DRIVER"));
    const [values, loading, error] = useCollectionData(queryRef);
    return(
        <Section>
            {values?.map(p =>
                <Col md={3}>
                    <DriverMonitor key={p.id}
                            person={p}/>
                </Col>
            )}
        </Section>
    );
}


