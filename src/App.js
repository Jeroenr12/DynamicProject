import './App.css';
import "./services/firebase";
import 'react-tabs/style/react-tabs.css';
import {useState} from "react";
import {PersonSelectorPage} from "./pages/PersonSelectorPage";
import {Section} from "./components/Section";
import {Col, Row} from "react-bootstrap";
import {WorkersPage} from "./pages/Workerspage";
import {updateDoc} from "firebase/firestore";

async function Logout(p, setp){
    try{
        await updateDoc(p.ref, {status: "NOT ACTIVE"});
        setp(null);
    } catch (e){
        console.log(`ERROR Status edit NOT done correctly: ${e}`)
    }
    return true;
}

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
        <a href="#" onClick={() => Logout(p, setp)}>Logout</a>

          <Row>
              <WorkersPage p={p} setp={setp}/>
          </Row>
      </>
  );
}

export default App;
