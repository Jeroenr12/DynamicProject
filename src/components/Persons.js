import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";
import {wait} from "@testing-library/user-event/dist/utils";
import {setPerson} from "../pages/PersonSelectorPage";

function Person(props){
    const {person, p, setp} = props;
    return(
        <a href="#" onDoubleClick={() => setp(person)}>
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

