import {Section} from "./Section";
import {Button, Col, Form} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {MdDelete} from "react-icons/md";
import PropTypes from "prop-types";

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


