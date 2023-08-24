import {Section} from "./Section";
import {Button, Col, Container, Row} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {MdDelete} from "react-icons/md";
import PropTypes from "prop-types";
import {usePersonsContext} from "../contexts/PersonsContext";

function Person(props){
    const {onEditPerson} = usePersonsContext();
    const {person, setp} = props;
    if(person.role === "DRIVER"){
        return(
            <a className="text-dark text-decoration-none w-50 bg-transparent" onClick={() =>{onEditPerson(person, {status: "ACTIVE"});
                setp(person);}}>
                <MyCard className="shadow border-1 border-dark">
                    <div className="fw-bold fs-4">>{person.name}</div>
                    <div>{person.id}</div>
                </MyCard>
            </a>

        );
    }
    return(
        <a className="text-dark text-decoration-none w-50 bg-transparent" onClick={() => setp(person)}>
            <MyCard className="shadow border-1 border-dark">
                <div className="fw-bold fs-4">{person.name}</div>
                <div>{person.id}</div>
            </MyCard>
        </a>

    );
}

export function Persons(props){
    const {persons, setp} = props;
    console.log(persons);
    return(
      <Section className="">
          {persons?.map(p =>
                  <Person key={p.id}
                          person={p}
                          p={p} setp={setp}/>)}
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
        const {onDeletePerson} = usePersonsContext()
        const {person, p} = props;
        if(p.ref.id === person.ref.id){
            return (
                <Col xs={12} sm={8} md={6} lg={4} >
                    <MyCard>
                        <div className="bg-light">
                            <div className="fw-bold fs-4">{person.name}</div>
                            <div>ID: {person.id}</div>
                            <div>{person.role}</div>
                        </div>
                    </MyCard>
                </Col>
            );
        }
        return (
            <Col xs={12} sm={8} md={6} lg={4}>
                <MyCard>
                    <div className="bg-light">
                        <div className="fw-bold fs-4">{person.name}</div>
                        <div>ID: {person.id}</div>
                        <div>{person.role}</div>
                        <div>{person.status}</div>
                    </div>
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
        status: PropTypes.string,
    })
}

export function Workers(props){
    const {persons, p} = props;
    return (
        <Section>
            {persons?.map(per =>
                <Worker key={per.id}
                        person={per} p={p}
                />)}
        </Section>
    );
}

export function DriverMonitor(props){
    const {person} = props;
    return(
        <Col xs={6} sm={6} md={4} lg={4}>
            {/*<a href="#" onClick={}>*/}
            <MyCard classname="border-1 border-dark m-3">
                <div>{person.name}</div>
                <div>{person.id}</div>
                <div>{person.status}</div>
            </MyCard>
            {/*</a>*/}
        </Col>

    );
}



