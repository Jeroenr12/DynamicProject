import './App.css';
import "./services/firebase";
import 'react-tabs/style/react-tabs.css';
import {useState} from "react";
import {PersonSelectorPage} from "./pages/PersonSelectorPage";
import {Section} from "./components/Section";
import {Col, Row} from "react-bootstrap";
import {WorkersPage} from "./pages/Workerspage";


function App() {
        const [p, setp] = useState(null);

    if(p == null){
        return(
            <Section>
                <PersonSelectorPage p={p} setp={setp}/>
            </Section>

        );


    }
  return (
      <>

        <h1>{p.name}</h1>
        <div>{p.status}</div>
        <a href="#" onDoubleClick={() => setp(null)}>Logout</a>

          <Row>
              <WorkersPage p={p} setp={setp}/>
          </Row>
      </>
  );
}

export default App;
